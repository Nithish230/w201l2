const http=require("http");
const fs=require("fs");
const args=require("minimist")(process.argv.slice(2));
//read file from local folder
/*fs.readFile("home.html",(err,home)=>{
    console.log(home.toString());
});*/

/*fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    http
     .createServer((request,response)=>{
        response.writeHeader(200,{"Content-Type":"text/html"});
        response.write(home);
        response.end();
     })
     .listen(3000);
});*/

let nithish1="";
let nithish2="";
let nithish3="";
fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    nithish1=home;
});

fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    nithish2=project;
});

fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    nithish3=registration;
});

http
 .createServer((request,response)=>{
    let url=request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
        case "/project":
            response.write(nithish2);
            response.end();
            break;
        case "/registration":
            response.write(nithish3);
            response.end();
            break;
        default:
             response.write(nithish1);
             response.end();
             break;
    }
 })
 .listen(args["port"]);