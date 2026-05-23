// typeoff and instanec off functoion 

function hello(name){
    return "yeehh"+name;
}
console.log(typeof hello)
console.log(hello instanceof Object)
// typeof sayHello → "function"

// JavaScript me functions ka apna special type hota hai: "function".

// Isliye jab tum typeof check karte ho, output "function" aata hai.

// sayHello instanceof Object → true

// JavaScript me function bhi ek object hota hai.

// Matlab function ke andar properties hoti hain (jaise length, name) aur tum unhe access kar sakte ho.

// Isliye instanceof Object true return karta hai.