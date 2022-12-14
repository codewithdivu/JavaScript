// synchronous

console.log("before");
// doing some operation for fetching data from database
// .........
console.log("fetching data from database.....");
console.log("after");

// asynchronous

console.log("before");
setTimeout(() => {
  console.log("fetching data from database....");
}, 2000);
console.log("after");
