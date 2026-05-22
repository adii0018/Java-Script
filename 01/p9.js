// symoble :Object me hidden property

{
    let student={
        name:"adiii",
        age:22
    };
    
    let secretkey =Symbol("secret");
    student[secretkey]="Topper";
    console.log(student)
}
//Yahan secretKey ek hidden property hai jo normal loop me nahi dikhegi.

