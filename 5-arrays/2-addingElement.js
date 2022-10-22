const numbers = [3, 4];

// End
numbers.push(5, 6); // here you can pass multiple parameters
console.log(numbers);

// Beginning

numbers.unshift(1, 2);
console.log(numbers);

// Middle

numbers.splice(2, 0, "a", "b");
console.log(numbers);

// kindly hover on any build in function and see the which parameters it needed and for what !
