const { suite } = require("selenium-webdriver/testing");
const LoginPage = require("./utils/LoginPage");

suite(function (env) {
  const loginPage = new LoginPage(env);
  before(() => {
    loginPage.OpenTwitter();
  });
  describe("Make a test with an Error login", function () {
    this.timeout(30000);
    it("Should be a Error login", function () {
      loginPage.LoginError();
    });
    after(async () => await loginPage.closeBrowser());
  });
});
