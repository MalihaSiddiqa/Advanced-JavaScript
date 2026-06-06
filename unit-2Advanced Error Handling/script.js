
//Task 1
//A


try{
    let result= num + 2;
console.log(result);
}catch(error){
    console.error("num is not defined");
}
//B
try{
    let str=null;
    console.log(str.length);
}catch(error){
    console.error("can't access property length string is null");
}
//C
try{
let arr=new Array(-5);
}catch(error){
    console.error("Array length must be 0 or greather than 0")
}
try{
decodeURIComponent("%");
}catch(error){
    console.error("Invalid URI component");
}
//Task 2

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name= "ValidationError";
    }
}
    function submitForm(data) {
    if (!data.name) {
        throw new ValidationError("enter your name")
    }
    if (data.age<0){
       throw new Error("Age can't be less than 18");
    }
}

console.log("Form submitted successfully");
try{
    submitForm({name:"maliha",age:18})
}catch(error){
  if (error instanceof ValidationError) {
    console.log("ValidationError",error.message);
  }else{
    console.log("General Error:",error.message);
  }
}
//task 3
const fs= require("fs");
function loadConfig(path) {
  let fileContent;
    try{
 fileContent=fs.readFileSync(path,"utf8");
        
    }catch(error){
        console.log("Missing config file");
    }

try{
    return JSON.parse(fileContent);
}catch(error){
    console.log("Invalid JSON");
    return{
        theme:"light",
        language:"en"
};
}
}
//task 
const readlineSync=require("readline-sync");
try{
    let age=readlineSync.question("what is your age");
    if(age===""||isNaN(age) || Number(age)<0){
        throw new Error("Invalid age entered");
    }
    age=Number(age);
    console.log(`Thankyou! your age is:${age}`);
}catch(error){
    console.log(error.message);
}