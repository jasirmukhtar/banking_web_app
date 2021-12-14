const express=require('express');
const app= express();
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})
app.get("/transfer",function(req,res){
  res.sendFile(__dirname + "/transfer.html")
})
app.get("/customers",function(req,res){
  res.sendFile(__dirname + "/customers.html")
})

app.get("/contact",function(req,res){
  res.sendFile(__dirname + "/contact.html")
})
app.listen(3000,function(){
  console.log("Server is running on port 3000")
})