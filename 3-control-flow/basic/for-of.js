// console.log("for-of looops");

// For-of loop in JavaScript is used to iterate over the array.

const colors = ["red", "orange", "blue", "pink", "yellow"];

for (let color of colors) {
  console.log(color);
}

// here we will get the index of each color so that's why we use for-of in array and for-in in object
for (let color in colors) {
  console.log(color);
}
