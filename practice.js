const fs=require("fs");
const express=require("express");
const bodyParser=require("body-parser")
const path=require("path");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/Check.html"))
})
//We have to read the the form from the usr
app.post("/signin",(req,res)=>{
    const formData=req.body;
    //Reading the tect file
fs.readFile("data.txt","utf-8",(err, fileData)=>{
    if(err){
        console.log(err);
        return;
    }
const fileDataObj=JSON.parse(fileData);
    if(formData.email==fileDataObj.email && formData.password==fileDataObj.password){
        res.end("Success")
    }else{
        res.end("DATA No MATCH")
    }

});

});

app.listen(9000,()=>{
    console.log("You are Connnected");
});


