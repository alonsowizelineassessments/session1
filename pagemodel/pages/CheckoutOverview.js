import { Selector } from 'testcafe'
import HeaderPage from './HeaderPage'

class CheckoutOverview extends HeaderPage{
  constructor () {
    super()
    this.checkoutOverViewLbl = Selector('.subheader')
    this.inventoryList = Selector('.inventory_item_name')
    this.finishBtn = Selector('.btn_action.cart_button')
  }
}

export default new CheckoutOverview()