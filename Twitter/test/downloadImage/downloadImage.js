const { By, until } = require("selenium-webdriver");
const { driver } = require("../../src/driver");
const fs = require("fs");

class DownloadImg {
  async DownloadProcess() {
    await this.clickPicture();
    await this.downloadPicture();
  }

  async clickPicture() {
    let picture = await driver.wait(
      until.elementLocated(
        By.className(
          "css-1dbjc4n r-172uzmj r-1pi2tsx r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu"
        )
      ),
      8000
    );
    await picture.click();
  }

  async downloadPicture() {
    try {
      let pictureProfile = await driver.wait(
        until.elementLocated(By.css('img[alt="Image"]')),
        15000
      );
      if (pictureProfile) {
        const imageUrl = await pictureProfile.getAttribute("src");
        const imageBuffer = await driver.executeScript(async function (url) {
          const response = await window.fetch(url);
          const buffer = await response.arrayBuffer();
          return Array.from(new Uint8Array(buffer));
        }, imageUrl);

        fs.writeFileSync("img.jpg", Buffer.from(imageBuffer));
      }
    } catch (error) {
      throw new Error("Failed test");
    }
  }
}

module.exports = DownloadImg;
