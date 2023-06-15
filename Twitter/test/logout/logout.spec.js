const LogInPage = require("../../utils/LogIn.js");
const LogOut = require("../../utils/Logout.js");

describe("Make a logout in twitter", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage(env);
  const logout = new LogOut(env);

  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Logout test", async function () {
    await logout.LogoutProcess();
    await logout.validation();
  });
});
