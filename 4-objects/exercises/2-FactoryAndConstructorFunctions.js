// const address = {
//     street: "Navapara",
//     city: "Madhavpur",
//     zipCode: 362230,
//   };

// task is to implement above object using factory function and constructor function

// factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address1 = createAddress("ideaTower", "madhavpur", 362230);

console.log(address1);

// constructor function

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address2 = new Address("vasavadi", "Keshod", 365554);
console.log(address2);
