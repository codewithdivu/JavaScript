const circle = {
  radius: 1,
};

// we can add new properties in existing object

circle.color = "yellow";
circle.draw = function () {
  console.log("draw bhai");
};

// console.log(circle);

// also we can delete any properties of object

delete circle.radius;
delete circle.draw;

console.log(circle);
