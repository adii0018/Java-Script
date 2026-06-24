//Objects se specific property nikalna
let a= [
  {name: "Amit", marks: 80},
  {name: "Ravi", marks: 45},
  {name: "Neha", marks: 90}
];


let b= a.map(a=>a.name)
let c= a.map(a=>a.marks)
console.log(b)
console.log(c)

