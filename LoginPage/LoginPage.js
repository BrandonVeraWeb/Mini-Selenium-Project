const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
let driver;
driver = new Builder().forBrowser("chrome").build();
class LoginPage {
  constructor() {
    this.emailField = driver.findElement(By.id("email"));
    this.passwordField = driver.findElement(By.id("pass"));
    this.page = driver.get("https://facebook.com");
    this.click = driver.findElement(By.name("login"));
  }
  async login(email, password) {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(password);
    await this.click.click();
  }
  async link() {
    await this.page;
  }
  async closeBrowser() {
    await driver.quit();
  }
  async waitBrowser() {
    await driver.manage().setTimeouts({ implicit: 10000 });
  }
}
module.exports = LoginPage;
