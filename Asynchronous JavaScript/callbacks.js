// first exaple

console.log("before");
getUser(1, (user) => {
  console.log("user", user);
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading a user from a database.....");
    callback({ id: id, gitHubUsername: "divu" });
  }, 2000);
}

// second exaple

console.log("before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading a user from a database.....");
    callback({ id: id, gitHubUsername: "divu" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("calling github API.....");
    callback(["repo1", "repo2", "repo3", "repo4"]);
  }, 2000);
}
