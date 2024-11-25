const user = {
    username : "ronak",
    email: "ronak@google.com"
}

const {username , email } = user;

username.ramesh

// destructuring 

//object in arrays

const myArray = [
    {
        username : "dohaib",
        email : "dohaib@gmail.com"
    },
    {
        username : "sahil",
        email: "sahil@gmail.com"
    },
    {
        username:"nagesh",
        email: "nagesh@gmail.com"
    }
]

// myArray.map( (ele)=> {
//     console.log(ele.username);
    
// })

let pwsourse = {
    coursename : "pw1",
    price : 1299,

    getCourseDetails: function(){
        console.log(`Course name is ${this.coursename} and course price is ${this.price}`);
        
    }
}

Object.prototype.ronak = function(){
    console.log(`Ronak was here`);
    
}

Array.prototype.heyronak = function(){
    console.log(`objects revision class`);
    
}

pwsourse.getCourseDetails()
pwsourse.ronak()

// pwsourse.heyronak(); // no
// myArray.heyronak() // yes


let user1 = {
    corsername : pw ,
    price : 1299,
}
let user2 = {
    email : "something@gmail.com"
}
let user3 = {
    support : "js course",
    price : 1299,
}
let user4 = {
    isLoggedIn : true,
}

