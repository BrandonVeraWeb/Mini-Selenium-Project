const { By, until } = require("selenium-webdriver");
const { driver } = require("../../src/driver");

class Trends {
  async Success() {
    let divTrends = await driver.wait(
      until.elementLocated(
        By.className(
          "css-901oao r-1nao33i r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-1bymd8e r-bcqeeo r-qvutc0"
        )
      ),
      9000
    );
    await divTrends.click();
    let divLatest = await driver.wait(
      until.elementLocated(By.linkText("View all")),
      10000
    );
    await divLatest.click();

    let profileClick = await driver.wait(
      until.elementLocated(
        By.className(
          "css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1h8ys4a r-1jeg54m r-qvutc0"
        )
      ),
      12000
    );
    await profileClick.click();
  }

}
module.exports = Trends;
