const LogInPage = require("../../utils/LogIn.js");
const Search = require("./searchCelebrities.js");

describe("Search celebrities", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage(env);
  const search = new Search(env);
  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Logout test", async function () {
    await search.SearchProcess();
    await search.validation();
  });
});
