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
    console.log("first");
    await searchTwitter.click();
    await searchTwitter.sendKeys("@midudev");
    await searchTwitter.sendKeys(Key.ENTER);
  }
  async clickProfileCelebrities() {
    let profile = await driver.wait(
      until.elementLocated(
        By.className(
          "css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1h8ys4a r-1jeg54m r-qvutc0"
        )
      ),
      8000
    );

    await profile.click();
  }
}

module.exports = Search;
