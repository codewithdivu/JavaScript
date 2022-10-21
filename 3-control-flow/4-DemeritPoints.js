checkSpeed(77);

function checkSpeed(num) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (num < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const point = Math.floor((num - speedLimit) / kmPerPoint);
  if (point >= 12) {
    console.log("License suspended");
  } else {
    console.log("Point: ", point);
  }
}
