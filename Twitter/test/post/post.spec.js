const LogInPage = require("../../utils/LogIn.js");
const PostPage = require("../../src/post.js");

describe("Make a post in twitter", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage();
  const postPage = new PostPage(env);

  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Make a post", async function () {
    await postPage.ProcessPost();
  });
});

//until.elementLocated(By.css("a[data-testid*='SideNav_NewTweet_Button']"));
