const { By, until, Key } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const assert = require("assert");
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
  async validation() {
    await this.link();
    await this.name();
    await this.userName();
  }
  async link() {
    let twitchMid = await driver.wait(
      until.elementLocated(By.css('a[href="https://t.co/jnv9RuXwle"]')),
      5000
    );
    assert(twitchMid !== null);
  }
  async name() {
    let user = await driver.wait(
      until.elementLocated(
        By.xpath(
          "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[2]/div[1]/div/div[1]/div/div/span/span[1]"
        )
      ),
      5000
    );
    const text = await user.getText();
    assert(text === "Miguel Ángel Durán");
  }
  async userName() {
    let username = await driver.wait(
      until.elementLocated(
        By.xpath(
          "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[2]/div[1]/div/div[2]/div/div/div/span"
        )
      ),
      5000
    );
    const text = await username.getText();
    assert(text === "@midudev");
  }
}

module.exports = Search;
