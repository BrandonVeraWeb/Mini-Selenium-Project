const { By, until } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const { fullsentences } = require("../../utils/Chance.js");
class PostPage {
  async Success() {
    await driver.sleep(3000);
    let inputPost = await driver.wait(
      until.elementLocated(
        By.className("notranslate public-DraftEditor-content")
      ),
      8000
    );
    await inputPost.click();
    await inputPost.sendKeys(fullsentences);
    let buttonTweet = await driver.wait(
      until.elementLocated(By.css("div[data-testid*='tweetButtonInline']")),
      6000
    );
    await buttonTweet.click();
    await driver.sleep(2000);
    let url = await driver.getCurrentUrl();
    return url;
  }
}

module.exports = PostPage;
