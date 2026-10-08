// Promises for asynchronous programming is an obect that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.Promises are used to handle asynchronous operations in JavaScript, allowing developers to write cleaner and more manageable code.
//js single threaded language
// const promiseOne = new Promise((resolve, reject) => {
//     console.log("Promise task 1");
//     // resolve("Promise resolved );
//         let msg=true;

//         setTimeout(()=>
//         {
//               if(msg!=true)
//         {
//             console.log("message using premise failed");
//         }
//         else{
//             console.log("error...");
//         }
//         },5000)
// });
// promiseOne.then((result) => {
//     console.log("result:", result);
// }).catch((error) => {
//     console.log(error);
// });

// //async/await
// console.log("1");
// async function test() {
//     console.log("2");
//     await console.log("3");
//     console.log("4");
// }
// t1=test();
// console.log("5");

//create that will print username and password using resolve and reject
// if username and password not found then it will call reject state and print ERROR...
// const promiseOne=new Promise((resolve,reject)=>{
//     let username="Pralav Chauhan";
//     let password="admin123";   
//     console.log("checking details...");
//     setTimeout(function()
// {
//     if(username=="Pralav chauhan" && password=="admin123")
//     {
//         resolve({
//                 status: true,
//                 message: "Login successful",
//                 user: username
//         });
//     }
//     else{
//         reject(
//             {
//                 status:false,
//                 message:"Invalid username or password"
//             }
//         );
//     }
// },1000)   
// });
// promiseOne.then((result)=>{
//     console.log(result.message);
//     console.log("welcome",result.user);
// }).catch((error)=>{
//     console.log(error.message);
// }); 


async function test()
{
    console.log("message:1");
    const response=await fetch("./student.json");
    console.log(response.status);
    const stdn=await response.json();
    return stdn;
    console.log("message:3");
}
test().catch.then((res)=>{
console.log(res);

})
