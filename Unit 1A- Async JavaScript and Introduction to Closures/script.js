
//task 1
setTimeout(function (){
    console.log("I'm just getting started with Advanced Javascript");
}, 4000);

console.log('The Start');

function abc(){
    console.log('Hello there');
    setTimeout(function (){
        console.log('Hello World');
    }, 3000);
}

abc();
console.log('The End');


//task 2
console.log('The Start');

function def(){
    console.log('Hello there');
}

abc();
def();

console.log('The End');

//task 3
console.log('Im First');  

setTimeout(()=>{
    console.log('I am just getting started with Adv. JS');
}, 2000);

console.log('Im Last');

//task 4
setTimeout(()=>{
    console.log('I am First',new Date());
}, 1000);
setTimeout(()=>{
    console.log('I am Second',new Date());
}, 1500);
setTimeout(()=>{
    console.log('I am Third',new Date());
}, 3500);
setTimeout(()=>{
    console.log('I am just getting started with Adv. JS',new Date());
    setTimeout(()=>{
        console.log('I am just getting started again.',new Date());
    }, 5000);
}, 2000);

//task 5
console.log('Hello');
setTimeout((id) =>{
    const user = {
        name: 'John Doe',
        age: 25
    };
    console.log(`User ID: ${id} : User Name : ${user.name}, User Age: ${user.age}`);
}, 5000,11);

setTimeout(()=>{
    console.log('Im First');
}, 1000);

setTimeout(()=>{
    console.log('I am second');
}, 1500);

//task 6
setTimeout((id,id2) =>{
    console.log('I am First', id);
    console.log(id2);
}, 1000, 99, 25);


//task 7
console.log('Hi');
for(let i = 0; i<=5 ; i++){
    console.log(i);
    setTimeout(()=>{
        console.log('this is set time out firing',i);
    }, 5000);
}


//task 8
setTimeout(() => {
    console.log('I am first');
}, 4000);

var sum = 0;
for(var i = 1; i<=4; i++){
    sum += i;
}
console.log(sum);


//task 9
const arr = [10,20,30,40];

for(var i = 0; i<4; i++){
    setTimeout(()=>{
        console.log(arr[i-2]);
    }, 4000);
    //console.log(i);
}

console.log(i);



//task 10
console.log('1', new Date());
setTimeout(() => {
    console.log("I am First", new Date());
}, 0);
console.log('11', new Date());
setTimeout(() => {
    console.log("I am Second", new Date());
}, 0);
console.log('111', new Date());
setTimeout(() => {
    console.log("I am Third", new Date());
}, 0);
setTimeout(() => {
    console.log("I am Just Getting Started with Adv. JS", new Date());
    setTimeout(() => {
        console.log("I am Just Getting Started again", new Date());
    }, 5000);
}, 2000);

//task 11
 
for (var i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4000);
}
 

for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4000);
}
