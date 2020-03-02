const express = require('express');
const bodyParser = require('body-parser');

//import express from 'express'

const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));




//https://www.google.com/search?q=cool+animals&rlz=1C5CHFA_enUS889US889&oq=cool+animals&aqs=chrome..69i57j0l7.1393j0j1&sourceid=chrome&ie=UTF-8


//req.query req.params req.body 

//? begin req.query 
//& add to req.query 
//: req.params 

//http://localhost:3000/melvin/javascript/break?cool=true&shirt=blue&number=9898989

// {
//     "reqparams": {
//     "name": "melvin",
//     "stack": "javascript",
//     "thing": "break"
//     },
//     "reqquery": {
//     "cool": "true",
//     "shirt": "blue",
//     "number": "9898989"
//     }
//     }
app.get('/:name/:stack/:thing', (req, res, next) => {
    
    let obj = {
        'reqparams':req.params,
        'reqquery':req.query
    }
    res.json(obj)
})





app.get('/oldskool', (req, res, next) => {
    res.send(`
        <form action="/search" method="POST">
        <label for="">City</label>
        <input type="text" name="city" id="">
        <label for="">Start-Date</label>
        <input type="date" name="start-date" id="">
        <label for="">End-Date</label>
        <input type="date" name="end-date" id="">
        <button type="submit">SEARCH</button>
        </form>
    `)
})

//http://localhost:3000/search?city=miami&start-date=2020-03-10&end-date=2020-03-26

// app.get('/search', (req, res, next)=>{
//     console.log('req query is ',req.query)
//     res.json(req.query)
// })


app.post('/search', (req, res, next)=>{
    console.log('req body is ',req.body)
})



// // Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});



















//CLient side code 
//axios.get(http://localhost:3000/about).then(res => {
   // res.data = {dogname:'Ralpa} 
//})


//Server Side Code 
// app.get('/about', (request, response, next) => {
//     //Query into a database and get ralph and serve it. 
//     //Database Collection  
//     response.json({
//         'dogName':'Ralph'
//     })
// });
  
















// app.get('/contact', (req, res, next) => {
    
// })
  


// app.get('/', (request, response, next) => {
//     response.sendFile(__dirname + '/views/home.html');
//   });
  

// // cat route:
// app.get('/cat', (request, response, next) => {
//     response.sendFile(__dirname + '/views/cat.html');
// });

