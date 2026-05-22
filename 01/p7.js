//== → sirf value check karta hai (type ignore karta hai).

//=== → value + type dono check karta hai (strict check).

{

    let uid = "172";  //string 
    let num = 172;
    
    if (uid ==num){
        console.log("yeeh normalyy check me pass !! (==)");
    }
    if (uid===num){
        console.log("isne strict method ko follow kiya  (===)");
    }else{
        console.log("fail in strict method ");
    }
}
