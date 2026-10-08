//create my own http module
import http from "http";
import { type } from "os";
const server=http.createServer(req,res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("welcome to my server");
    console.log("server is running on port 3000");
    
}
{
    type :"module",
    main: "Day1/serverfolder/Myserver.js",
    "scripts": {
        "start": "node Day1/serverfolder/Myserver.js"
    },
    "dependencies": {
        "http": "^0.0.1-security"
    }   
    "test": "echo \"Error: no test specified\" && exit 1"
}
