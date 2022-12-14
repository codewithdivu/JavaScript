console.log("before");
const user = getUser(1);
console.log(user); // this will return undefined
console.log("after");

function getUser(id) {
  setTimeout(() => {
    console.log("reading a user from a database.....");
    return { id: id, gitHubUsername: "divu" };
  }, 2000);
}

/// there is 3 approaches to deal with Asynchronous behavior

// 1. Callbacks
// 2. Promises
// 3. Async/wait
