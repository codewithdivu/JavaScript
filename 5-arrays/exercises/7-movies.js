const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const result = movies
  .filter((item) => item.year === 2018 && item.rating > 4)
  .sort((a, b) => (a.title < b.title ? 1 : -1))
  .map((m) => m.title);

console.log(result);
