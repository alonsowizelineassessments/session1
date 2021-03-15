import { Selector } from 'testcafe'

export default class HeaderPage {
  constructor () {
    this.shoppingCartLnk = Selector('#shopping_cart_container a.shopping_cart_link')
    this.burgerMenu = Selector('#react-burger-menu-btn')

    //Burger-Menu Items
    this.about = Selector('#about_sidebar_link')
    this.Logout = Selector('#logout_sidebar_link')
  }
}
