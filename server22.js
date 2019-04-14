const express = require('express');
const app = express();

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

*/



const cors = require('cors')  //for enabling cors ( cross origin resource sharing )

var corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send({"name":"nemo"});
});



app.route('/api/cats').get((req, res) => {
    res.send({
   cat:[{ name: 'lilly' }, { name: 'lucy' }]
    })
  });


  app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
  });



app.listen(8000, () => {
    console.log('Server started!')
  })