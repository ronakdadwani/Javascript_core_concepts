// function declarations
// function hello (a , b){
//     return a+b;
    
// }
// function call
// let sum = hello(25 , 50);
// console.log(sum);


// function sayHello(){
    // console.log("Hello World");
    // console.log("Ronak");
    
// }  
// sayHello();

// function addTwoNums(num1 , num2){
//     let result = num1 + num2;
//     return result
// }/

// const result = addTwoNums(5 , 5);
// console.log(result);


// function registeredUser(user){
//     if (!user) {
//         return "Please pass the user "
//     }
//     return user + ' is registerd at PW'
// }
// console.log(registeredUser());

// function cartBillTotal = (...numbers){
//     //take a variable total
//     let total = 0;
//     //loop all values and keep adding the total
//     for(const num of numbers)
//         total += num;
//     // return total

//     return total

// }


// const user ={
//     id : 123,
//     name : "Ronak",
//     email : "ronak@google.in"
// }

// function addUser(obj){
//     console.log(`A user name is ${obj.name} got an email ${obj.email}`);
    
// }

// addUser(user)


function addTwoNums(num1 , num2){
    return num1 + num2
}

const addTwoNums2 = ()=>{
    return num1 +num2
}

const addTwoNums3 = (num1 , num2) => num1 + num2;
const addTwoNums4 = num1  =>  num1 ; // implicit return 
const addTwoNums5 = num1  => ({email : "ronak@pw.live"})
const addTwoNums6 = (num1 , num2)  => ({email : "ronak@pw.live"})


function learning(){
    console.log(this);
    
}
const learningTwo = () => {
    console.log(this );
    
}
// learning();
learningTwo();



