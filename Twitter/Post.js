const { Builder, By, until, Key } = require("selenium-webdriver");
const { driver } = require("./driver");

class PostPage {
  async ProcessPost() {
    console.log("START CLASS");
    await this.postInput("Hi there, this is a post");
    console.log("END CLASS");
  }

  async postInput(text) {
    console.log("START POST");
    let inputPost = await driver.wait(
      until.elementLocated(By.css("notranslate public-DraftEditor-content")),
      10000
    );
    console.log("END POST");
    await inputPost.click();
    await inputPost.sendKeys(text);
  }
}

module.exports = PostPage;
