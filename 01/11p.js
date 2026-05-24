// Normal Number vs BigInt

{
   let normalNumber = 9007199254740991; // max safe integer
console.log(normalNumber + 1); // ✅ 9007199254740992
console.log(normalNumber + 2); // ❌ 9007199254740992 (galat result)

let bigNumber = 9007199254740991n;
console.log(bigNumber + 2n); // ✅ 9007199254740993n

}
