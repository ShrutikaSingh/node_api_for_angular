const express = require('express');

const app=express();

app.get('/',(req,res)=>{
    res.json({"name":"shrutika"});
});

app.route('/api/stud').get((req,res)=>{
    res.send({
            User:[{"userID":1,"name":"shrutika","email":"shrutika@gmail.com","password":"rsafs","mobile":"8290957945","userType":"Admin"},{"userID":3,"name":"Mukesh","email":"mukesh@gmail.com","password":"12345","mobile":"8899001122","userType":"User"},{"userID":5,"name":"Sanjay Mishra","email":"sanjay@gmail.com","password":"12345","mobile":"8908901234","userType":"User"},{"userID":13,"name":"Akash","email":"akash56@gmail.com","password":"12345","mobile":"9834129728","userType":"User"},{"userID":15,"name":"poojA","email":"POOJA@gmail.com","password":"12345","mobile":"9834129728","userType":"User"},{"userID":17,"name":"priya","email":"Priya@gmail.com","password":"11225","mobile":"9834129728","userType":"User"}],
    })
});

app.route('/api/stud/:name').get((req,res)=>
{
    const requestStudName=req.params['name']
    res.send({name:requestStudName})
})

app.listen(5000,()=>{
console.log("server started")
});










