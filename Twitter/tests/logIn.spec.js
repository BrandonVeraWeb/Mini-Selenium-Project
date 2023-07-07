const Login = require("../utils/LogIn");
const { driver } = require("../src/driver");
const assert = require("assert");
describe("Login", function (env) {
  this.timeout(60000);
  const login = new Login(env);

  beforeEach(function () {
    login.OpenTwitter();
  });
  it("Login Success", async function () {
    await login.Success();
    let url = await driver.getCurrentUrl();
    assert.equal(url, "https://twitter.com/home", "Login Success is failed");
  });
  it("Login Error", async function () {
    await login.Error();
    let url = await driver.getCurrentUrl();
    assert.equal(
      url,
      "https://twitter.com/i/flow/login?redirect_after_login=%2F",
      "Login Error is failed"
    );
  });
  it.only("Logout", async function () {
    await login.Logout();
    let url = await driver.getCurrentUrl();
    assert.equal(url, "https://twitter.com/logout", "Logout is failed");
  });
});
