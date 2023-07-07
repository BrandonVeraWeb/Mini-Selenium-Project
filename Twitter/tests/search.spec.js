const Login = require("../utils/LogIn.js");
const Search = require("./pages/searchCelebrities.js");
const Trends = require("./pages/trends.js");
const DownloadImg = require("./pages/downloadImage.js");
describe("Search", function (env) {
  this.timeout(60000);
  const login = new Login(env);
  const search = new Search(env);
  const trends = new Trends(env);
  const downloadImg = new DownloadImg(env);
  
  beforeEach(function () {
    login.OpenTwitter();
    login.Success();
  });

  it("Search a celebrity", async function () {
    await search.SearchSuccess();
  });

  it("Search trends", async function () {
    await trends.Success();
  });
  it("Search and download a profile picture", async function () {
    await search.SearchSuccess();
    await downloadImg.Success();
  });
  // after(async () => await login.close());
});
