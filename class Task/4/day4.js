//event loop 
//create one loop that runs forever and prints "Hello World" every second
setInterval(() => {
    console.log("Hello World");
}, 1000);   
setTimeout(() => {
    console.log("Goodbye World");
    process.exit();
}, 5000);
