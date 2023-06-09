const LogInPage = require("../../utils/LogIn.js");
const PostPage = require("../post/post.js");
const Comment = require("./comment.js");

describe("Make a comment a post created in twitter", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage(env);
  const postPage = new PostPage(env);
  const comment = new Comment(env);

  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Make a post and comment the post", async function () {
    await postPage.ProcessPost();
    await comment.processComment();
    await comment.validation();
  });
  //after(async () => await loginPage.closeBrowser());
});
