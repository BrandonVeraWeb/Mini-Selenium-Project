const { By, until } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const { sentence } = require("../../utils/Chance.js");
const assert = require("assert");
class PostPage {
  async proccessPost() {
    await driver.sleep(3000);
    let inputPost = await driver.wait(
      until.elementLocated(
        By.className("notranslate public-DraftEditor-content")
      ),
      8000
    );
    await inputPost.click();
    await inputPost.sendKeys(sentence);
    let buttonTweet = await driver.wait(
      until.elementLocated(By.css("div[data-testid*='tweetButtonInline']")),
      6000
    );
    await buttonTweet.click();
    await driver.sleep(2000);
    let url = await driver.getCurrentUrl();
    assert.equal(url, "https://twitter.com/home");
  }
}

module.exports = PostPage;
