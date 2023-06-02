const { Builder, By, Browser } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(function (env) {
  describe("Searching a celebrities", function () {
    this.timeout(50000);
    let driver;
    before("Log In", async function () {
      driver = await new Builder().forBrowser("chrome").build();
      await driver.get("https://twitter.com");
      await driver.manage().window().fullscreen();
      let title = await driver.getTitle();
      assert.equal("Explore / Twitter", title);
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
        const xpathbnlog = By.xpath(
          '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div/span/span'
        );
        await driver.findElement(xpathbnlog).click();
      }
      await driver.findElement(By.name("text")).click();
      await driver.findElement(By.name("text")).sendKeys("@Manueltest48284");
      const xpathbtnNext = By.xpath(
        '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/span'
      );
      await driver.findElement(xpathbtnNext).click();
      await driver.findElement(By.name("password")).click();
      await driver.findElement(By.name("password")).sendKeys("carroSeguro23");
      const xpathbtnLog = By.xpath(
        '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div/span/span'
      );
      await driver.findElement(xpathbtnLog).click();
    });
    it("Log out", async function () {
      await driver.manage().setTimeouts({ implicit: 30000 });
      const xpathProfile = By.xpath(
        '//*[@id="react-root"]/div/div/div[2]/header/div/div/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[4]/div'
      );
      await driver.findElement(xpathProfile).click();
    });
  });
});
