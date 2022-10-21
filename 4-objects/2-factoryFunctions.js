// Factory functions

function createCircle(radius, location, isVisible) {
  return {
    radius,
    location,
    isVisible,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(5, 98, false);
console.log(circle1);

const circle2 = createCircle(10, 3, true);
console.log(circle2);
