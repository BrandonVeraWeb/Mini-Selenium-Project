const Login = require("../utils/LogIn");
const { driver } = require("../src/driver");

describe("Login", function (env) {
  this.timeout(60000);
  const login = new Login(env);

  beforeEach(function () {
    login.OpenTwitter();
  });
  it("Login Success", async function () {
    await login.Success();
  });
  it("Login Error", async function () {
    await login.Error();
  });
  it("Logout", async function () {
    await login.Logout();
  });
  after(async () => {
    await driver.quit();
  });
});
