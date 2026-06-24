var shapeinput = "circle";

//for area of circle 
var pai =22/7;
var radius =8;
// for area of rectangle 
var Length = 77;
var weadth = 87;
// for area of square 
var side = 82;

switch(shapeinput){
    case("circle"):
    console.log(pai*radius*radius);
    break;


     case("rectangule"):
    console.log(length*weadth);
    break;


     case("square"):
    console.log(side*side);
    break;

    default:
    console.log("wrong shape input");
    break;
}

console.log("heloooooo")