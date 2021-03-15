import { Selector } from 'testcafe'
import HeaderPage from './HeaderPage'

class ProductsPage extends HeaderPage{
  constructor () {
    super()
    this.productsLbl = Selector('.product_label')
    this.productsBtn = Selector('#inventory_container > div > div > div.pricebar > button')
  }

  findProduct(product) {
    return Selector('.inventory_item_name').withText(product)
  }
}

export default new ProductsPage()