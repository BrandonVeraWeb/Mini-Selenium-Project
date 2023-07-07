const { By, until, Key } = require("selenium-webdriver");
const { driver } = require("../src/driver");
class Login {
  async Success() {
    await this.loginEmail("@Manueltest48284");
    await this.passwordInput("carroSeguro23");
    await driver.sleep(1000);
    let url = await driver.getCurrentUrl();
    return url;
  }
  async Error() {
    await this.loginEmail("@Manueltest48284");
    await this.passwordInput("passwordIncorrect");
    let url = await driver.getCurrentUrl();
    return url;
  }

  async Logout() {
    await this.Success();
    let buttonProfile = await driver.wait(
      until.elementLocated(
        By.className(
          "r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
        )
      ),
      10000
    );
    await buttonProfile.click();
    let selectLogout = await driver.wait(
      until.elementLocated(
        By.css('a[data-testid*="AccountSwitcher_Logout_Button"]')
      ),
      12000
    );
    await selectLogout.click();

    let confirm = await driver.wait(
      until.elementLocated(
        By.css('div[data-testid*="confirmationSheetConfirm"]')
      ),
      15000
    );
    await confirm.click();
    let url = await driver.getCurrentUrl();
    return url;
  }
  async OpenTwitter() {
    await driver.manage().deleteAllCookies();
    this.page = driver.get(
      "https://twitter.com/i/flow/login?redirect_after_login=%2F"
    );
    await driver.manage().window().maximize();
  }

  async loginEmail(email) {
    let emailField = await driver.wait(
      until.elementLocated(By.css("*[name='text']")),
      10000
    );
    await emailField.sendKeys(email);
    await emailField.sendKeys(Key.ENTER);
  }

  async passwordInput(password) {
    let passwordField = await driver.wait(
      until.elementLocated(By.css('*[name="password"]')),
      5000
    );
    await passwordField.sendKeys(password);
    await passwordField.sendKeys(Key.ENTER);
  }

  async close() {
    await driver.close();
  }
}

module.exports = Login;
