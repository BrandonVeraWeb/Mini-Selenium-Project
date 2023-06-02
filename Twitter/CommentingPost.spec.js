const { Builder, By, Browser } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const { Chance } = require("chance");
const assert = require("assert");
const LoginPage = require("../LoginPage/LoginPage.js");
suite(
  function (env) {
    describe("Post test", function () {
      this.timeout(30000);
      let driver;
      let chance = new Chance();
      const loginPage = new LoginPage(env);
      before("Log In", async function () {
        await loginPage.waitBrowser();
        await loginPage.link("https://facebook.com");
      });
      it("Commenting a post", async function () {
        console.log("Hi");
        // await driver.manage().setTimeouts({ implicit: 30000 });
        // await driver
        //   .findElement(By.className("notranslate public-DraftEditor-content"))
        //   .click();
        // await driver
        //   .findElement(By.className("notranslate public-DraftEditor-content"))
        //   .sendKeys(chance.animal());
        // await driver.manage().setTimeouts({ implicit: 3000 });
        // const xpathTwt = By.xpath(
        //   '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div/div/div[2]/div[3]/div/div/div[2]/div[3]/div/span/span'
        // );
        // await driver.findElement(xpathTwt).click();
        // await driver.manage().setTimeouts({ implicit: 3000 });
        // const xpathProfile = By.xpath(
        //   '//*[@id="react-root"]/div/div/div[2]/header/div/div/div/div[1]/div[2]/nav/a[8]/div'
        // );
        // await driver.findElement(xpathProfile).click();
        // await driver.manage().setTimeouts({ implicit: 20000 });
        // const xpathPost = By.xpath(
        //   '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/section/div/div/div[4]/div/div/article/div/div/div[2]/div[2]'
        // );
        // await driver.findElement(xpathPost).click();
        // await driver.manage().setTimeouts({ implicit: 20000 });
        // await driver
        //   .findElement(By.className("notranslate public-DraftEditor-content"))
        //   .click();
        // await driver
        //   .findElement(By.className("notranslate public-DraftEditor-content"))
        //   .sendKeys(chance.address());
        // const btnReply = By.xpath(
        //   '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[1]/div/section/div/div/div[1]/div/div/div/div/div[2]/div[2]/div/div/div/div[2]/div[3]/div/div/div[2]/div[2]/div/span/span'
        // );
        // await driver.findElement(btnReply).click();
      });

      after(async () => await driver.quit());
    });
  },
  { Browser: [Browser.CHROME] }
);
