const express = require('express');

const app=express();


const bodyParser=require('body-parser');
app.use(bodyParser.json());

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


/*
this code is not working understand this
app.route('/api/stud').post((req,res)=>{
    res.send(200,req.body)
});
app.route('api/stud/:name').put((req,res)=>{
res.send(200,req.body)
})
*/

app.listen(4000,()=>{
console.log("server started")
});
