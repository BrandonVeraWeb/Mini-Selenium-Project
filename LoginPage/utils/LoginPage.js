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

  async OpenTwitter() {
    await this.page;
    await driver.manage().window().setRect({ width: 1624, height: 1268 });
  }

  async LoginSuccess() {
    await this.email("waxexa1154@hrisland.com");
    await this.password("carroSeguro23");
    await this.click.click();
  }

  async LoginError() {
    await this.email("waxeca1154@hrisland.com");
    await this.password("123456789");
    await this.click.click();
  }

  async email(email) {
    let emailField = await driver.findElement(By.id("email"));
    await emailField.sendKeys(email);
  }

  async password(password) {
    let passwordField = await driver.findElement(By.id("pass"));
    await passwordField.sendKeys(password);
  }

  async closeBrowser() {
    await driver.quit();
  }
}
module.exports = LoginPage;
