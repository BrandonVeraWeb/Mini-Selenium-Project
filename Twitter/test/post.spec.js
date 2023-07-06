const Login = require("../utils/LogIn.js");
const PostPage = require("./page/post.js");
const Comment = require("./page/comment.js");
const DeleteComment = require("./page/deleteComment.js");

describe("Post on twitter", function (env) {
  this.timeout(60000);
  const login = new Login(env);
  const post = new PostPage(env);
  const comment = new Comment(env);
  const deleteComment = new DeleteComment(env);

  beforeEach(function () {
    login.OpenTwitter();
    login.Success();
  });

  it("Make a post", async function () {
    await post.proccessPost();
  });
  it.only("Make a comment in a post", async function () {
    await post.proccessPost();
    await comment.processComment();
  });
  it("delete a comment", async function () {
    await post.proccessPost();
    await comment.processComment();
    await deleteComment.deleteProcess();
  });

  // after(async () => await login.close());
});
