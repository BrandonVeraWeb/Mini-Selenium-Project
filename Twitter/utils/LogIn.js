const { By, until, Key } = require("selenium-webdriver");
const { driver } = require("../src/driver");

class LoginPage {
  async LoginProcess() {
    await this.clickLog();
    await this.loginEmail("@Manueltest48284");
    await this.passwordInput("carroSeguro23");
  }

  async clickLog() {
    const logIn = driver.wait(until.elementLocated(By.css('a[href="/login"]')));
    await logIn.click();
  }
  async OpenTwitter() {
    this.page = driver.get("https://twitter.com");
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
}

module.exports = LoginPage;
