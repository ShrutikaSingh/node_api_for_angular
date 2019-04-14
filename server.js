const express = require('express');

const app=express();

app.get('/',(req,res)=>{
    res.json({"name":"shrutika"});
});

app.route('/api/stud').get((req,res)=>{
    res.send({
        students:[{name:'bhawana'},{name:'lucy'},{name:'aarya'},{name:'hash'}],
    })
});

app.route('/api/stud/:name').get((req,res)=>
{
    const requestStudName=req.params['name']
    res.send({name:requestStudName})
})

app.listen(7000,()=>{
console.log("server started")
});
