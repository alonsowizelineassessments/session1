import { Selector, t } from 'testcafe'

class LoginPage {
  constructor () {
    this.userField = Selector('#user-name')
    this.passwordField = Selector('#password')
    this.loginButton = Selector('input[value="LOGIN"]')
    this.errorMessage = Selector('h3[data-test="error"]')
  }

  async submitLoginForm(username, password){
    await t
      .typeText(this.userField, username, {paste:true})
      .typeText(this.passwordField, password, {paste:true})
      .click(this.loginButton)
  }
}

export default new LoginPage()