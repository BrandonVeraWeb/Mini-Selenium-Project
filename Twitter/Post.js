const { Builder, By, until, Key } = require("selenium-webdriver");
const { driver } = require("./Wait");

class PostPage {
  async ProcessPost() {
    console.log("START");
    await this.postInput("asdasd");
    console.log("END");
  }

  async postInput(text) {
    console.log("Entra");
    let inputPost = await driver.wait(
      until.elementLocated(By.css("notranslate public-DraftEditor-content")),
      10000
    );
    console.log("first");
    await inputPost.click();
    await inputPost.sendKeys(text);
  }
}

module.exports = PostPage;
