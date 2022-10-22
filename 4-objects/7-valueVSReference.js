// PRIMITIVES TYPE (are copied by their value)
// -> Number
// -> String
// -> Boolean
// -> Symbol
// -> undefined
// -> null

// EXAMPLE

let num = 10;

function increment(num) {
  num++;
}

increment(num);
console.log(num);

// ----------------------------------------------------

// REFERENCE TYPE (are copied by their reference)
// -> Object
// -> Array
// -> Function

// EXAMPLE

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
