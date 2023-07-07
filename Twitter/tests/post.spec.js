const Login = require("../utils/LogIn.js");
const PostPage = require("./pages/post.js");
const Comment = require("./pages/comment.js");
const DeleteComment = require("./pages/deleteComment.js");

describe("Post on twitter", function (env) {
  this.timeout(60000);
  const login = new Login(env);
  const post = new PostPage(env);
  const comment = new Comment(env);
  const deleteComment = new DeleteComment(env);
  const assert = require("assert");
  beforeEach(function () {
    login.OpenTwitter();
    login.Success();
  });

  it("Make a post", async function () {
    let url = await post.Success();
    assert.equal(url, "https://twitter.com/home", "Post failed");
  });
  it("Make a comment in a post", async function () {
    await post.Success();
    let url = await comment.processComment();
    assert.notEqual(url, "https://twitter.com/home", "Comment failed");
  });
  it("delete a comment", async function () {
    await post.Success();
    await comment.processComment();
    let url = await deleteComment.deleteProcess();
    assert.notEqual(url, "https://twitter/home", "Delete a comment failed");
  });
});
