class LoginPage {
  usernameInput() {
    return cy.get("input[data-test='username']");
  }

  passwordInput() {
    return cy.get("input[data-test='password']");
  }

  loginBtn() {
    return cy.get("input[data-test='login-button']");
  }

  login(username, password) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginBtn().click();
  }
}

module.exports = new LoginPage();
