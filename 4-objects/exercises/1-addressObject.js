const address = {
  street: "Navapara",
  city: "Madhavpur",
  zipCode: 362230,
};

function showAddress(obj) {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}

showAddress(address);
