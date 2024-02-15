import loginPage from "../pages/loginPage";

loginPage;

describe("Login Page", () => {
  it("Should login user with valid credentials", () => {
    cy.visit("/");
    loginPage.login("standard_user", "secret_sauce");
    cy.url().should("contains", "/inventory");
    cy.get(".title").contains("Products");
  });
});
