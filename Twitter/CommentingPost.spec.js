const { Builder, By, Browser } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const { Chance } = require("chance");
const assert = require("assert");
suite(
  function (env) {
    describe("Post test", function () {
      this.timeout(30000);
      let driver;
      let chance = new Chance();
      before("Log In", async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://twitter.com");
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
          await driver
            .findElement(By.name("password"))
            .sendKeys("carroSeguro23");
          const xpathbtnLog = By.xpath(
            '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div/span/span'
          );
          await driver.findElement(xpathbtnLog).click();
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
      it("Commenting a post", async function () {
        await driver.manage().setTimeouts({ implicit: 30000 });
        await driver
          .findElement(By.className("notranslate public-DraftEditor-content"))
          .click();
        await driver
          .findElement(By.className("notranslate public-DraftEditor-content"))
          .sendKeys(chance.animal());
        await driver.manage().setTimeouts({ implicit: 3000 });
        const xpathTwt = By.xpath(
          '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div/div/div[2]/div[3]/div/div/div[2]/div[3]/div/span/span'
        );
        await driver.findElement(xpathTwt).click();
        await driver.manage().setTimeouts({ implicit: 3000 });
        const xpathProfile = By.xpath(
          '//*[@id="react-root"]/div/div/div[2]/header/div/div/div/div[1]/div[2]/nav/a[8]/div'
        );
        await driver.findElement(xpathProfile).click();
        await driver.manage().setTimeouts({ implicit: 20000 });
        const xpathPost = By.xpath(
          '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/section/div/div/div[4]/div/div/article/div/div/div[2]/div[2]'
        );
        await driver.findElement(xpathPost).click();
        await driver.manage().setTimeouts({ implicit: 20000 });

        await driver
          .findElement(By.className("notranslate public-DraftEditor-content"))
          .click();
        await driver
          .findElement(By.className("notranslate public-DraftEditor-content"))
          .sendKeys(chance.address());

        const btnReply = By.xpath(
          '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/section/div/div/div[1]/div/div/div/div/div[2]/div[2]/div/div/div/div[2]/div[3]/div/div/div[2]/div[2]/div/span/span'
        );
        await driver.findElement(btnReply).click();
      });

      after(async () => await driver.quit());
    });
  },
  { Browser: [Browser.CHROME] }
);
