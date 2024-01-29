const studentRollNo=123
let studEmail= "abc@gamil.com"
var studPass="college"
studCity="mumbai"
let studState;

// studentRollNo=1 //this is not allowed
console.log(studentRollNo);
studEmail="xyz@email.com"
studPass="232324@4454"
studCity="Pune"

// console.log(studPass);
// console.log(studState);

console.table([studentRollNo,studEmail,studPass,studCity,studState])
/*
prefer not to use
Because of issue in block scope and functional scope
*/