const person = {
  firstName: "divyesh",
  lastName: "Mavadiya",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set setName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.setName = "lady bhikhari";
console.log(person.fullName);
