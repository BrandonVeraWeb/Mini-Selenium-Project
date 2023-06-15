const { By, until, Key } = require("selenium-webdriver");
const { driver } = require("../../src/driver");

class Search {
  async SearchProcess() {
    await this.twitterSearch();
    await this.clickProfileCelebrities();
  }

  async twitterSearch() {
    let searchTwitter = await driver.wait(
      until.elementLocated(By.css('input[placeholder*="Search Twitter"]')),
      8000
    );
    await searchTwitter.click();
    await searchTwitter.sendKeys("@midudev");
  }

  async clickProfileCelebrities() {
    let profile = await driver.wait(
      until.elementLocated(By.linkText("Miguel Ángel Durán")),
      10000
    );
    await profile.click();
  }
}

module.exports = Search;
