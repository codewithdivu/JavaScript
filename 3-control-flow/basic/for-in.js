// console.log("for-in loop");

// For-in loop in JavaScript is used to iterate over the properties of an object.

const person = {
  name: "Divyesh",
  age: 19,
  surName: "Mavadiya",
};

for (let key in person) {
  console.log(key);
  console.log(person[key]); // here we will get value of that key
}
