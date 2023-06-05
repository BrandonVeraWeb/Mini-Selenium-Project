const { By, until } = require("selenium-webdriver");
const { driver } = require("./driver");
const { sentence } = require("../utils/Chance.js");

class PostPage {
  async ProcessPost() {
    await this.postInput(sentence);
    await this.buttonTweet();
  }

  async postInput(text) {
    let inputPost = await driver.wait(
      until.elementLocated(
        By.className("notranslate public-DraftEditor-content")
      ),
      8000
    );
    await inputPost.click();
    await inputPost.sendKeys(text);
  }

  async buttonTweet() {
    let buttonTweet = await driver.wait(
      until.elementLocated(By.css("div[data-testid*='tweetButtonInline']")),
      6000
    );
    await buttonTweet.click();
  }
}

module.exports = PostPage;
