// Truthy vs Falsy in Action
// js

{

 let name = "Aditya";
let age = 0;

if (name) {
  console.log("Name is truthy"); // ✅ chalega
}

if (age) {
  console.log("Age is truthy");
} else {
  console.log("Age is falsy");   // ✅ chalega
}

}