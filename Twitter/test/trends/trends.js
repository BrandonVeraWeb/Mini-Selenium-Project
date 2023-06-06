const { By, until } = require("selenium-webdriver");
const { driver } = require("../../src/driver");

class Trends {
  async TrendsProcess() {
    await clickTrends();
  }

  async clickTrends() {
    let divTrends = await driver.wait(
      until.elementLocated(
        By.className(
          "css-901oao r-1nao33i r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-1bymd8e r-bcqeeo r-qvutc0"
        )
      ),
      9000
    );
    await divTrends.click();
  }
}
module.exports = Trends;
