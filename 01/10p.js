//symole :Loop me Symbol skip hota hai

{
    let user= {
        name :"adii",
        [Symbol("id")]:1999
    };
    for (let key in user) {
  console.log(key); // ✅ sirf "name" print hoga, Symbol skip ho jayega
}
    
}
