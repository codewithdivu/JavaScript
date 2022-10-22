const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// it will return object
const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

// it will return the index of that object
const index = courses.findIndex(function (course) {
  return course.name === "a";
});
