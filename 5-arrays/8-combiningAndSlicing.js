const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // this will return new Array

const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

// using spread Operator

const combination = [...first, ...second];
