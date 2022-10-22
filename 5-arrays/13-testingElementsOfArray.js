const numbers = [1, 2, 3, 4];

const allPositive = numbers.every((value) => {
  return value >= 0;
});
console.log(allPositive);

// every -> this method will check every element of array if there is any element will not match this condition then it will simply return false and break the loop

const atLeastOnePositive = numbers.every((value) => {
  return value >= 50;
});
console.log(atLeastOnePositive);

// some -> this will check that if there is atleast one element that satified this condition if there is element match the condition then this loop will break;
