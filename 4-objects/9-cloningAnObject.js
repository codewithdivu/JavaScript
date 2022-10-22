const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// CLONING OBJECT

// old method

// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }
// console.log(another);

// new method

// 1

// const another = Object.assign({}, circle);
// console.log(another);

// 2

const another = { ...circle }; // spread operator (ES6)
console.log(another);
