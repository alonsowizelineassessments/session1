import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutPage from '../pages/CheckoutPage'
import { DATA } from '../data/Constants'

fixture('Saucedemo Negative Testing')
  .page `${process.env.URL}`

test('2. Login with invalid user',  async t=> {
  await LoginPage.submitLoginForm(DATA.INVALID_USER.USERNAME, DATA.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.errorMessage.exists).ok()
})

test('7. Continue with missing mail information',  async t=> {
  await LoginPage.submitLoginForm(DATA.STANDARD_USER.USERNAME, DATA.STANDARD_USER.PASSWORD)
  await t.expect(ProductsPage.productsLbl.exists).ok()
  .click(ProductsPage.productsBtn.nth(0))
  .click(ProductsPage.shoppingCartLnk)
  .expect(ShoppingCartPage.shoppingCartLbl.exists).ok()
  .click(ShoppingCartPage.checkOutBtn)
  .expect(CheckoutPage.checkOutLbl.exists).ok()
  .typeText(CheckoutPage.firstName, DATA.USER_DATA.FIRST_NAME)
  .typeText(CheckoutPage.lastName, DATA.USER_DATA.LAST_NAME)
  .click(CheckoutPage.continue)
  //Validate error message is displayed
  .expect(CheckoutPage.errorMessage.exists).ok()
})