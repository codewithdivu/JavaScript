// Constructor Function

function Circle(radius, location, isVisible) {
  this.radius = radius;
  this.location = location;
  this.isVisible = isVisible;
  this.draw = function () {
    console.log("draw kari de bhai");
  };
}

const circle = new Circle(5, 62, false);

console.log(circle);
