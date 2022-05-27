console.log("Utils.js is running");
//In order to use square function in any other file, we'll use export
//There are two types of exports, default and named export
//Here we will use named export to use square function in app.js
// export { square };
// export { add };
//or in one line
//export { square, add };
//or with declaration
export const square = (x) => x * x;
export const add = (a, b) => a + b;

//Default Export
// could be export default (y, z) => y - z; //without name
//or it could be export { square, add, subtract as default} after
//declaration const subtract = (y, z) => y - z;

export default (y, z) => y - z;
