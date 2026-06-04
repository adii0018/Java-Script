var age =82;
var citezen = true;
var registration = true;

if (age >=18 && citezen ==true && registration == true){
    console.log("you are eledgeble for voteing")
}
else if (age <=18 && citezen ==true && registration == true){
    console.log("age kaam hee")
}
else if (age >=18 && citezen ==false && registration == true){
    console.log("you are citizen is not yet")
}
else if (age >=18 && citezen ==true && registration == false){
    console.log("you are restration  is not yet")
}
else{
    console.log('notttt for voteee')
}