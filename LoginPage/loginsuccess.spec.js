const { suite } = require("selenium-webdriver/testing");
const LoginPage = require("./LoginPage.js");

suite(function (env) {
  const loginPage = new LoginPage(env);
  before(() => {
    loginPage.OpenTwitter();
  });
  describe("Make a test with a Success login", function () {
    this.timeout(30000);
    it("Should be a success login", function () {
      loginPage.LoginSuccess();
    });
    after(async () => await loginPage.closeBrowser());
  });
});
