//Array Destructuring
const address = ["Mohallah Jallalabad", "Jhang", "35200", "Punjab", "Pakistan"];

const [street, city, zip, state, country] = address;

console.log(`You are in Street: ${street} City: ${city}`);
//Object Destructuring
//Person an object
// const person = {
//   name: "Manzoor Khan",
//   age: 72,
//   //Another Object Location because of curly braces
//   location: {
//     city: "Jhang",
//     temp: 46,
//   },
// };

// //Destructuring means copying the whole or partial object like
// //Instead of
// //const name = person.name;
// //const age = person.age;
// //we can use
// // const { name, age } = person;
// //Even we can give them new names as well like
// //const { name: Name, age: PersonAge } = person;
// //Even we can pass the default values while destructing, if value is set in original object, it will be used
// //otherwise default value will be used like
// const { name: Name = "Sheraz", age: PersonAge } = person;
// console.log(`${Name} is ${PersonAge} years old`);
