import { Selector } from 'testcafe'
import HeaderPage from './HeaderPage'

class CheckoutComplete extends HeaderPage{
  constructor () {
    super()
    this.checkoutCompleteLbl = Selector('h2.complete-header')
  }
}

export default new CheckoutComplete()