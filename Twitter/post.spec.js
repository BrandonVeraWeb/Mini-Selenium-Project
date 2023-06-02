const { suite } = require("selenium-webdriver/testing");
const LogInPage = require("./LogIn.js");
const PostPage = require("./Post.js");

suite(function (env) {
  before(() => {
    const logInPage = new LogInPage(env);
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  describe("Make a post in twitter", function (env) {
    this.timeout(60000);
    const postPage = new PostPage(env);

    it("Make a post", async function () {
      postPage.ProcessPost();
    });
  });
});
