const { By, until, Key } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const assert = require("assert");
class Search {
  async SearchSuccess() {
    await driver.sleep(3000);
    let searchTwitter = await driver.wait(
      until.elementLocated(By.css('input[placeholder*="Search Twitter"]')),
      8000
    );
    await searchTwitter.click();
    await searchTwitter.sendKeys("@midudev");
    let profile = await driver.wait(
      until.elementLocated(By.linkText("Miguel Ángel Durán")),
      10000
    );
    await profile.click();

    let url = await driver.getCurrentUrl();
    assert.equal(url, "https://twitter.com/midudev", "ERROR");
  }
}

module.exports = Search;
