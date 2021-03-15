import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutPage from '../pages/CheckoutPage'
import CheckoutOverview from '../pages/CheckoutOverview'
import CheckoutComplete from '../pages/CheckoutComplete'
import { DATA } from '../data/Constants'

fixture('Saucedemo Positive Testing')
  .page `${process.env.URL}`
  .beforeEach(async () => {
    await LoginPage.submitLoginForm(DATA.STANDARD_USER.USERNAME, DATA.STANDARD_USER.PASSWORD)
  })

test('1. Login with a valid user',  async t=> {
    //Validate we are in products page (locator and content)
    await t
      .expect(ProductsPage.productsLbl.exists).ok()
      .expect(ProductsPage.productsLbl.textContent).eql('Products', 'Products label different')
})

test('3. Logout from products page',  async t=> {
  await t
    .expect(ProductsPage.productsLbl.exists).ok()
    .click(ProductsPage.burgerMenu)
    .click(ProductsPage.Logout)
    //Validate we are in login page
    .expect(LoginPage.loginButton.exists).ok()
})

test('4. Navigate to the shopping cart',  async t=> {
  await t
  .expect(ProductsPage.productsLbl.exists).ok()
  .click(ProductsPage.shoppingCartLnk)
  //Validate we are in shopping cart page (locator and content)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  .expect(ShoppingCartPage.shoppingCartLbl.textContent).eql('Your Cart', 'Shopping Cart label different')
})

test('5. Add a single item to the shopping cart',  async t=> {
  await t
  .expect(ProductsPage.productsLbl.exists).ok()
  //Add single item
  .click(ProductsPage.productsBtn.nth(0))
  .click(ProductsPage.shoppingCartLnk)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  //Validate item in the shopping cart
  .expect(ShoppingCartPage.inventoryList.withText('Sauce Labs Backpack').exists).ok()
})

test('6. Add multiple items to the shopping cart',  async t=> {
  await t
  .expect(ProductsPage.productsLbl.exists).ok()
  //Add multiple items (3)
  .click(ProductsPage.productsBtn.nth(0))
  .click(ProductsPage.productsBtn.nth(1))
  .click(ProductsPage.productsBtn.nth(2))
  .click(ProductsPage.shoppingCartLnk)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  //Validate 3 items are in shopping cart
  .expect(ShoppingCartPage.inventoryList.withText('Sauce Labs Backpack').exists).ok()
  .expect(ShoppingCartPage.inventoryList.withText('Sauce Labs Bike Light').exists).ok()
  .expect(ShoppingCartPage.inventoryList.withText('Sauce Labs Bolt T-Shirt').exists).ok()
})

test('8. Fill user\'s information',  async t=> {
  await t
  .expect(ProductsPage.productsLbl.exists).ok()
  .click(ProductsPage.productsBtn.nth(0))
  .click(ProductsPage.shoppingCartLnk)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  .click(ShoppingCartPage.checkOutBtn)
  .expect(CheckoutPage.checkOutLbl.exists).ok()
  .typeText(CheckoutPage.firstName, DATA.USER_DATA.FIRST_NAME)
  .typeText(CheckoutPage.lastName, DATA.USER_DATA.LAST_NAME)
  .typeText(CheckoutPage.zipCode, DATA.USER_DATA.ZIP_CODE)
  .click(CheckoutPage.continue)
  //Validate user is in overview page
  .expect(CheckoutOverview.checkoutOverViewLbl.exists).ok()
})

test('9. Final order items',  async t=> {
  await t
  .expect(ProductsPage.productsLbl.exists).ok()
  //Select first 2 items
  .click(ProductsPage.productsBtn.nth(0))
  .click(ProductsPage.productsBtn.nth(1))
  .click(ProductsPage.shoppingCartLnk)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  .click(ShoppingCartPage.checkOutBtn)
  .expect(CheckoutPage.checkOutLbl.exists).ok()
  .typeText(CheckoutPage.firstName, DATA.USER_DATA.FIRST_NAME)
  .typeText(CheckoutPage.lastName, DATA.USER_DATA.LAST_NAME)
  .typeText(CheckoutPage.zipCode, DATA.USER_DATA.ZIP_CODE)
  .click(CheckoutPage.continue)
  .expect(CheckoutOverview.checkoutOverViewLbl.exists).ok()
  //Validate items in overview page are the firtst 2 items
  .expect(CheckoutOverview.inventoryList.withText('Sauce Labs Backpack').exists).ok()
  .expect(CheckoutOverview.inventoryList.withText('Sauce Labs Bike Light').exists).ok()
})

test('10. Complete a purchase',  async t=> {
  await t
  .expect(ProductsPage.productsLbl.exists).ok()
  .click(ProductsPage.productsBtn.nth(0))
  .click(ProductsPage.productsBtn.nth(1))
  .click(ProductsPage.shoppingCartLnk)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  .click(ShoppingCartPage.checkOutBtn)
  .expect(CheckoutPage.checkOutLbl.exists).ok()
  .typeText(CheckoutPage.firstName, DATA.USER_DATA.FIRST_NAME)
  .typeText(CheckoutPage.lastName, DATA.USER_DATA.LAST_NAME)
  .typeText(CheckoutPage.zipCode, DATA.USER_DATA.ZIP_CODE)
  .click(CheckoutPage.continue)
  .expect(CheckoutOverview.checkoutOverViewLbl.exists).ok()
  .expect(CheckoutOverview.inventoryList.withText('Sauce Labs Backpack').exists).ok()
  .expect(CheckoutOverview.inventoryList.withText('Sauce Labs Bike Light').exists).ok()
  .click(CheckoutOverview.finishBtn)
  //Validate confirmation page
  .expect(CheckoutComplete.checkoutCompleteLbl.exists).ok()
})

test('BONUS. DATA PROVIDER',  async t=> {
  await t.expect(ProductsPage.productsLbl.exists).ok()
  //Select products in the JSON array
  for(const product of DATA.PRODUCTS){
    const base = await ProductsPage.findProduct(product).parent().parent().parent();
    const btn = await base.find('button')
    await t.click(btn)
  }
  //Continue shopping flow
  await t
    .click(ProductsPage.shoppingCartLnk)
    .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
    .click(ShoppingCartPage.checkOutBtn)
    .expect(CheckoutPage.checkOutLbl.exists).ok()
    .typeText(CheckoutPage.firstName, DATA.USER_DATA.FIRST_NAME)
    .typeText(CheckoutPage.lastName, DATA.USER_DATA.LAST_NAME)
    .typeText(CheckoutPage.zipCode, DATA.USER_DATA.ZIP_CODE)
    .click(CheckoutPage.continue)
    .expect(CheckoutOverview.checkoutOverViewLbl.exists).ok()
  //Validate all products in the JSON array
  for(const product of DATA.PRODUCTS){
    await t.expect(CheckoutOverview.inventoryList.withText(product).exists).ok()
  }
  //Complete purchase
  await t
    .click(CheckoutOverview.finishBtn)
    .expect(CheckoutComplete.checkoutCompleteLbl.exists).ok()
})