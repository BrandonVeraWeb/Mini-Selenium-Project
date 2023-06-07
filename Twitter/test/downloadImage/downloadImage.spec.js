const LogInPage = require("../../utils/LogIn.js");
const Search = require("../search/searchCelebrities.js");
const DownloadImg = require("../downloadImage/downloadImage.js");

describe("Download Profile Picture", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage(env);
  const search = new Search(env);
  const downloadImg = new DownloadImg(env);
  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Download", async function () {
    await search.SearchProcess();
    await downloadImg.DownloadProcess();
  });
});
// const { By, until, Key } = require("selenium-webdriver");
// const { driver } = require("../../src/driver");

// class DownloadImg {
//   async DownloadProcess() {
//     await this.clickPicture();
//     await this.downloadPicture();
//   }

//   async clickPicture() {
//     let picture = await driver.wait(
//       until.elementLocated(
//         By.className(
//           "css-1dbjc4n r-172uzmj r-1pi2tsx r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu"
//         )
//       ),
//       8000
//     );
//     await picture.click();
//   }

//   async downloadPicture() {
//     let pictureProfile = await driver.wait(
//       until.elementLocated(By.className("css-9pa8cd")),
//       12000
//     );
//     const actions = driver.actions({ async: true });
//     await actions
//       .contextClick(pictureProfile)
//       .sendKeys(Key.ARROW_DOWN)
//       .perform();
//     // await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
//   }
// }

// module.exports = DownloadImg;
