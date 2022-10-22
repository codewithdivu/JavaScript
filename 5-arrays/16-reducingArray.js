const numbers = [1, 2, 3, 4, 5, 6];
const num = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

const multiply = num.reduce((ac, value) => {
  return ac * value;
});

console.log(multiply);

// in reduce method there is second argument is intial value of accumulator but if we not pass second argument then default value of accumulator is first value of our array
