const { Builder, By, Browser } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const { Chance } = require("chance");

suite(function (env) {
  describe("Commenting test", function () {
    this.timeout(30000);
    let driver;
    let chance = new Chance();
    before("Login", async function () {
      driver = await new Builder().forBrowser("chrome").build();
      await driver.get("https://twitter.com");
      await driver.findElement(By.linkText("Log in")).click();
      await driver.manage().setTimeouts({ implicit: 10000 });
      await driver.findElement(By.name("text")).click();
      await driver
        .findElement(By.name("text"))
        .sendKeys("waxexa1154@hrisland.com");

      const xpathbtninit = By.xpath(
        '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[6]/div/span/span'
      );
      await driver.findElement(xpathbtninit).click();
      const userName = await driver.findElement(By.name("text"));
      if (!userName) {
        await driver.findElement(By.name("password")).click();
        await driver.findElement(By.name("password")).sendKeys("carroSeguro23");
        const xpathbtnLog = By.xpath(
          '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div/span/span'
        );
        await driver.findElement(xpathbtnLog).click();
      }
    });
  });
});
