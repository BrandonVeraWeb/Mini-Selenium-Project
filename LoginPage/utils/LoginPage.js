const { By, Key, until } = require("selenium-webdriver");
const { driver } = require("../../Twitter/src/driver");
const assert = require("assert");
class LoginPage {
  async OpenFacebook() {
    await driver.get("https://facebook.com");
    await driver.manage().window().maximize();
  }

  async LoginSuccess() {
    await this.email("waxexa1154@hrisland.com");
    await this.password("carroSeguro23");
  }

  async LoginError() {
    await this.email("waxeca1154@hrisland.com");
    await this.password("123456789");
  }

  async email(email) {
    let emailField = await driver.findElement(By.id("email"));
    await emailField.sendKeys(email);
  }

  async password(password) {
    let passwordField = await driver.findElement(By.id("pass"));
    await passwordField.sendKeys(password);
    await passwordField.sendKeys(Key.ENTER);
  }

  async validation() {
    await this.navBarProfile();
    await this.logoFacebook();
    await this.numberPhone();
  }

  async navBarProfile() {
    let profile = await driver.wait(
      until.elementLocated(
        By.className("x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft")
      ),
      5000
    );
    const text = await profile.getText();
    assert(text === "Manuel");
  }

  async logoFacebook() {
    let logo = await driver.wait(
      until.elementLocated(By.className("x1lliihq x1k90msu x2h7rmj x1qfuztq")),
      5000
    );
    assert(logo !== null);
  }
  async numberPhone() {
    let divPhone = await driver.wait(
      until.elementLocated(
        By.className(
          "x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x14z4hjw x3x7a5m xngnso2 x1qb5hxa x1xlr1w8 xzsf02u x1yc453h"
        )
      ),
      5000
    );
    const text = await divPhone.getText();
    assert(text === "Introduce un número de móvil");
  }

  async closeBrowser() {
    await driver.quit();
  }
}
module.exports = LoginPage;
