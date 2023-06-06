const LogInPage = require("../../utils/LogIn.js");
const PostPage = require("../../src/post.js");
const Comment = require("../../src/comment.js");
const DeleteComment = require("../../src/deleteComment.js");

describe("Delete a comment in twitter", function (env) {
  this.timeout(60000);
  const logInPage = new LogInPage(env);
  const postPage = new PostPage(env);
  const comment = new Comment(env);
  const deleteComment = new DeleteComment(env);

  before(() => {
    logInPage.OpenTwitter();
    logInPage.LoginProcess();
  });

  it("Delete a comment ", async function () {
    await postPage.ProcessPost();
    await comment.processComment();
    await deleteComment.DeleteProcess();
  });
});