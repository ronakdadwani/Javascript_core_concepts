// creating a promise
// const promiseOne = new Promise( function(resolve , reject){
//         // do an async task
//         // db call , crypto 

//         setTimeout(() => {
//             console.log('Async task is complete');
//             resolve()
            
//         }, 1000);
// }) 

// // consuming a promise

// promiseOne.then( ()=>{
//     console.log("Promise Consumed");
    
// })

// new Promise( function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve();
        
//     }, 2000)
// })

// const promiseThree = new Promise( (resolve , reject)=>{
//     setTimeout( ()=>{
//         // db call to get all users from database
//         resolve({username : "dilip" , email : "d@pwsourse.in"})
//     } , 3000)
// })

// promiseThree.then( (data)=>{
//     console.log(data);
    
// })

// const promiseFour = new Promise ( (resolve , reject)=>{
//     setTimeout( ()=>{
//         let error = true;
//         if(!error) {
//             resolve({username : "ronak"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     },4000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// .finally( () => console.log('The Promisse is either resolved or rejected'))

const promiseFive = new Promise ((resolve , reject) =>{
    setTimeout( () =>{
        let error = false;
        if(!error){
            resolve({username : "ronak" , email: "ronak@pw.in"})
        } else {
            reject("ERROR : Something went wrong!")
        }
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
    
}

consumePromiseFive();

async function getAllUsers(){
    const responces = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = responces.json()
    console.log(data);   
}
getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users').then((response1)=>{
//     return response1.json
// }).then((data)=>{
//     console.log(data);
    
// })