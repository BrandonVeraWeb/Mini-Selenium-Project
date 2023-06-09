const LoginPage = require("../utils/LoginPage");

describe("Make a test with an Error login", function (env) {
  this.timeout(30000);
  const loginPage = new LoginPage(env);

  before(() => {
    loginPage.OpenFacebook();
  });
  it("Should be a Error login", async function () {
    await loginPage.LoginError();
    await loginPage.validationError();
  });
  //after(async () => await loginPage.closeBrowser());
});
