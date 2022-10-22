const numbers = [1, 2, -4, 6, -1, 7, -9];

const filtered = numbers.filter((item) => {
  return item >= 0;
});

console.log(filtered);
