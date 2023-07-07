const { until, By } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
class DeleteComment {
  async deleteProcess() {
    await driver.sleep(3000);
    let clickTarget = await driver.wait(
      until.elementLocated(
        By.className("css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu")
      ),
      9000
    );

    await clickTarget.click();

    let option = await driver.wait(
      until.elementLocated(
        By.className(
          "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
        )
      ),
      4000
    );
    await option.click();

    let optionDelete = await driver.wait(
      until.elementLocated(
        By.className(
          "css-901oao r-9l7dzd r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-qvutc0"
        )
      ),
      8000
    );
    await optionDelete.click();

    let confirmButton = await driver.wait(
      until.elementLocated(
        By.css('div[data-testid*="confirmationSheetConfirm"]')
      ),
      4000
    );
    await confirmButton.click();
  }
}
module.exports = DeleteComment;
