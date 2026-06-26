const hey = (str)=>{
    let inputarry = str.toLowerCase().split("")
    // console.log(inputarry)

    const values = inputarry.filter(
        (cuElem) =>
            cuElem.charCodeAt() >= "a".charCodeAt() && 
            cuElem.charCodeAt() <= "z".charCodeAt()
    )
    // console.log(values)
    return [...new Set (values)].length=== 26;
}

console.log(hey("dahbclsBLSC  qwertyuiopasdfghjklzxcvbnmHLSAIUCHLIHC"))