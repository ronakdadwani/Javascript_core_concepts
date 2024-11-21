const obj1 = {
    name : "ronak",
    role : "student",
    isLoggedIn : true, 

    registeredUser : function(){
        console.log(`${this.name} is a registered user!`);
        
    }
}

// console.log(obj1.name);
// console.log(obj1.role);



const obj2 = {
    10: "number10",
    20: "number20"
}

const key1 =  Symbol("key1")
const key2 =  Symbol("key2")

const obj3 = {
    [key1] : "ronak",
    [key2] : "skills"
}

console.log(obj3[key1]);
console.log(obj3[key2]);
