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
    let url = await login.Success();
    assert.equal(url, "https://twitter.com/home", "Login success is failed");
  });
  it("Login Error", async function () {
    let url = await login.Error();
    assert.equal(
      url,
      "https://twitter.com/i/flow/login?redirect_after_login=%2F",
      "Login Error is failed"
    );
  });
  it("Logout", async function () {
    let url = await login.Logout();
    assert.equal(url, "https://twitter.com/logout", "Logout is failed");
  });
});
