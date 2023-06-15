const { By, until } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const { sentence } = require("../../utils/Chance.js");
const assert = require("assert");
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
  async validation() {
    await this.article();
    await this.userName();
  }

  async article() {
    let articlePost = await driver.wait(
      until.elementLocated(By.css('article[tabindex="0"]')),
      5000
    );
    assert(articlePost !== null);
  }
  async userName() {
    let userNamePost = await driver.wait(
      until.elementLocated(
        By.xpath(
          "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/section/div/div/div[1]/div/div/article/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/div[2]/div/div[1]/a/div/span"
        )
      ),
      5000
    );
    const text = await userNamePost.getText();
    assert(text === "@Manueltest48284");
  }
}

module.exports = PostPage;
