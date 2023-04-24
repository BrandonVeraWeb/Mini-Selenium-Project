const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
const assert = require("assert");
const { suite } = require("selenium-webdriver/testing");

suite(
  function (env) {
    describe("Make a test with a successful login", function () {
      this.timeout(30000);
      let driver;
      before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
      });
      it("Should be successful login", async function () {
        await driver.get("https://www.facebook.com");
        await driver.manage().window().setRect({ width: 968, height: 1020 });
        await driver
          .findElement(By.id("email"))
          .sendKeys("waxexa1154@hrisland.com");
        await driver.findElement(By.id("pass")).sendKeys("carroSeguro23");
        await driver.findElement(By.name("login")).click();
      });
      after(async () => await driver.quit());
    });
  },
  { Browser: [Browser.CHROME] }
);
