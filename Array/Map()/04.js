// combination of filter  and map()

let students = [
  {name: "Amit", marks: 80},
  {name: "Ravi", marks: 45},
  {name: "Neha", marks: 90}
];


let passnames = students.filter(s=>s.marks > 50).map(s=>s.name)

console.log(passnames)