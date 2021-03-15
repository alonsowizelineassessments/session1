import { Selector } from 'testcafe'
import HeaderPage from './HeaderPage'

class CheckoutPage extends HeaderPage{
  constructor () {
    super()
    this.checkOutLbl = Selector('.subheader')
    this.firstName = Selector('#first-name')
    this.lastName = Selector('#last-name')
    this.zipCode = Selector('#postal-code')
    this.continue = Selector('input[type="submit"]')
    this.cancel = Selector('.cart_cancel_link')
    this.errorMessage = Selector('h3[data-test="error"]')
  }
}

export default new CheckoutPage()