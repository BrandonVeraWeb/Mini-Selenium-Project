const { until, By, Key } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const { animal } = require("../../utils/Chance.js");
class Comment {
  async processComment() {
    await driver.sleep(3000);
    let reply = await driver.wait(
      until.elementLocated(By.css("a[data-testid*='AppTabBar_Profile_Link']")),
      6000
    );
    await reply.click();
    let selectTweet = await driver.wait(
      until.elementLocated(
        By.className("css-1dbjc4n r-k4xj1c r-18u37iz r-1wtj0ep")
      ),
      8000
    );
    await selectTweet.click();
    let inputReply = await driver.wait(
      until.elementLocated(
        By.className("notranslate public-DraftEditor-content")
      ),
      6000
    );
    await inputReply.sendKeys(animal);
    let button = await driver.wait(
      until.elementLocated(
        By.className(
          "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"
        )
      ),
      9000
    );
    await button.click();
    let url = await driver.getCurrentUrl();
    return url;
  }
}

module.exports = Comment;
