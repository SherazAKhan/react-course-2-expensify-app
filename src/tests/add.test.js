const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test("Should Greet the Person", () => {
  const result = generateGreeting("Mahboob");
  expect(result).toBe(`Hello Mahboob!`);
  // test("should add two numbers", () => {
  //   const result = add(3, 4);

  //   //Jest Assertions
  //   expect(result).toBe(7);
});
