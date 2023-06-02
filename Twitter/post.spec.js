const { suite } = require("selenium-webdriver/testing");
const LogInPage = require("./LogIn.js");
const PostPage = require("./Post.js");

suite(function (env) {
  before(() => {
    const logInPage = new LogInPage(env);
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  describe("Make a post in twitter", function () {
    this.timeout(60000);
    it("Make a post", async function (env) {
      const postPage = new PostPage(env);
      postPage.ProcessPost();
    });
  });
});
