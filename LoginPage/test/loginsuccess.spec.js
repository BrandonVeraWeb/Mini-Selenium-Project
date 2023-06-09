const LoginPage = require("../utils/LoginPage");

describe("Make a test with a Success login", function (env) {
  this.timeout(30000);
  const loginPage = new LoginPage(env);
  before(() => {
    loginPage.OpenFacebook();
  });
  it("Should be a success login", async function () {
    await loginPage.LoginSuccess();
    await loginPage.validationSuccess();
  });
  //after(async () => await loginPage.closeBrowser());
});
