const { By, until, Key } = require("selenium-webdriver");
const { driver } = require("../../src/driver");

class Logout {
  async LogoutProcess() {
    await this.openOptions();
    await this.selectOption();
    await this.confirmButton();
  }

  async openOptions() {
    let buttonProfile = await driver.wait(
      until.elementLocated(
        By.className(
          "r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
        )
      ),
      8000
    );
    await buttonProfile.click();
  }

  async selectOption() {
    let selectLogout = await driver.wait(
      until.elementLocated(
        By.css('a[data-testid*="AccountSwitcher_Logout_Button"]')
      ),
      5000
    );
    await selectLogout.click();
  }
  async confirmButton() {
    let confirm = await driver.wait(
      until.elementLocated(
        By.css('div[data-testid*="confirmationSheetConfirm"]')
      ),
      9000
    );
    await confirm.click();
  }
}
module.exports = Logout;
