const vowels = (str)=>{
    const voo = "aeiou";
    let count = 0 ;
    for (let char of  voo){
        if (str.includes(char)){
            count++;
        }
    }
    return count;
};
console.log(vowels("hello world"))