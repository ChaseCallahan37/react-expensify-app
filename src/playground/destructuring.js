//
//Object destructuring
//

// const person = {
//   name: "Chase",
//   age: 21,
//   location: {
//     city: "Tuscaloosa",
//     temp: 104,
//   },
// };

// const { name: firstName = "No name", age: yrsOld, hobby = "Running" } = person;
// console.log(firstName, yrsOld, hobby);

const book = {
  publisher: {
    // name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);

//
//Array Destructuring
//

const address = ["lake arnedre", "coker", "AL", "35452"];

const [street, city, state, zip] = address;

console.log(street, zip);
const item = ["coffee", 1.5, 3, 4.5];

const [name, first, third] = item;

console.log(`${name} is sold most ofter for ${first} and ${third}`);
