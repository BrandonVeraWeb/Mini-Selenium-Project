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
