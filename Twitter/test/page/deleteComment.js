const { until, By } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const assert = require("assert");
class DeleteComment {
  async deleteProcess() {
    await driver.sleep(3000);
    await this.clickComment();
    await this.optionComment();
    await this.selectOption();
    await this.confirmDelete();
  }

  async clickComment() {
    let clickTarget = await driver.wait(
      until.elementLocated(
        By.className("css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu")
      ),
      9000
    );

    await clickTarget.click();
  }

  async optionComment() {
    let option = await driver.wait(
      until.elementLocated(
        By.className(
          "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
        )
      ),
      4000
    );
    await option.click();
  }
  async selectOption() {
    let optionDelete = await driver.wait(
      until.elementLocated(
        By.className(
          "css-901oao r-9l7dzd r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-qvutc0"
        )
      ),
      8000
    );
    await optionDelete.click();
  }

  async confirmDelete() {
    let confirmButton = await driver.wait(
      until.elementLocated(
        By.css('div[data-testid*="confirmationSheetConfirm"]')
      ),
      4000
    );
    await confirmButton.click();
  }
  async validation() {
    await this.deleteMessageSuccess();
    // await this.dataTimeComment();
  }

  async deleteMessageSuccess() {
    try {
      let success = await driver.wait(
        until.elementLocated(
          By.className(
            "css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-1udh08x r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg"
          )
        ),
        5000
      );
      if (success !== null) {
        console.log("first");
      } else {
        assert(success == null);
      }
    } catch (error) {
      return null;
    }
  }
}
module.exports = DeleteComment;
