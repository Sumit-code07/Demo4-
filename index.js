const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const port=8080;
app.listen(port,()=>[
    console.log(`App is listening port ${port}`)
]);
app.get("/",(req,res)=>{
    res.render("hello.ejs")
})

