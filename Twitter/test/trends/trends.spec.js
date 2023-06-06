const LogInPage = require("../../utils/LogIn.js");
const Trends = require("./trends.js");

describe("Watch the trend", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage();
  const trends = new Trends();

  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Click trends", async function () {
    await trends.clickTrends();
  });
});
