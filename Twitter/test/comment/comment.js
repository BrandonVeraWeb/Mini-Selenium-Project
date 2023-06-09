const { until, By, Key } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const { animal } = require("../../utils/Chance.js");
const assert = require("assert");

class Comment {
  async processComment() {
    await this.clickProfile();
    await this.clickTweet();
    await this.inputComment();
    await this.buttonReply();
  }

  async clickProfile() {
    let reply = await driver.wait(
      until.elementLocated(By.css("a[data-testid*='AppTabBar_Profile_Link']")),
      6000
    );
    await reply.click();
  }
  async clickTweet() {
    let selectTweet = await driver.wait(
      until.elementLocated(
        By.className("css-1dbjc4n r-k4xj1c r-18u37iz r-1wtj0ep")
      ),
      8000
    );
    await selectTweet.click();
  }

  async inputComment() {
    let inputReply = await driver.wait(
      until.elementLocated(
        By.className("notranslate public-DraftEditor-content")
      ),
      6000
    );
    await inputReply.sendKeys(animal);
  }
  async buttonReply() {
    let button = await driver.wait(
      until.elementLocated(
        By.className(
          "css-18t94o4 css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr"
        )
      ),
      9000
    );
    await button.click();
  }
  async validation() {
    await this.divComment();
    await this.dataTimeComment();
  }
  async divComment() {
    let comment = await driver.wait(
      until.elementLocated(
        By.className("css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu")
      ),
      6000
    );
    assert(comment !== null);
  }

  async dataTimeComment() {
    let dataDiv = await driver.wait(
      until.elementLocated(
        By.className(
          "css-4rbku5 css-18t94o4 css-901oao r-1bwzh9t r-1loqt21 r-xoduu5 r-1q142lx r-1w6e6rj r-37j5jr r-a023e6 r-16dba41 r-9aw3ui r-rjixqe r-bcqeeo r-3s2u2q r-qvutc0"
        )
      ),
      5000
    );
    assert(dataDiv !== null);
  }
}

module.exports = Comment;
