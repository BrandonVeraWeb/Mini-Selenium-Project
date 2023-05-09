const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const LoginPage = require("./LoginPage.js");

suite(
  function (env) {
    describe("Make a test with an error login", function () {
      this.timeout(30000);
      const loginPage = new LoginPage(env);
      before(async () => {
        await loginPage.waitBrowser();
        await loginPage.link();
      });

      it("Should be error login", async function () {
        await loginPage.login("waxexa1154@hrisland.com", "carroSeguro23");
      });
      after(async () =>
        setTimeout(async () => await loginPage.closeBrowser(), 3000)
      );
    });
  },
  { Browser: [Browser.CHROME] }
);
