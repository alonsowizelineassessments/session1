import { Selector } from 'testcafe'
import HeaderPage from './HeaderPage'

class ShoppingCartPage extends HeaderPage{
  constructor () {
    super()
    this.shoppingCartLbl = Selector('div').withExactText('Your Cart')
    this.inventoryList = Selector('.inventory_item_name')
    this.checkOutBtn = Selector('a').withExactText('CHECKOUT')
  }
}

export default new ShoppingCartPage()