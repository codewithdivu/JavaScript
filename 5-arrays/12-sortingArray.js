const numbers = [2, 3, 1, 4];

numbers.sort();
numbers.reverse();
// console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Reactjs" },
  { id: 3, name: "Javascript" },
];

// a < b => -1
// a > b => 1
// a === b => 0

courses.sort((a, b) => {
  if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
  if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
  return 0;
});

console.log(courses);
