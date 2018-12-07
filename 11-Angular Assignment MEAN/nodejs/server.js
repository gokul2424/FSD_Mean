const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
 
// parse application/json
app.use(bodyParser.json())
app.use(cors())

var employeesjson=[{"id":1,"first_name":"Flory","last_name":"Hackett","email":"fhackett0@networksolutions.com","gender":"Male"},
{"id":2,"first_name":"Beltran","last_name":"Lombardo","email":"blombardo1@creativecommons.org","gender":"Male"},
{"id":3,"first_name":"Erika","last_name":"Jonas","email":"ejonas2@php.net","gender":"Female"},
{"id":4,"first_name":"Wayne","last_name":"Glasner","email":"wglasner3@bbb.org","gender":"Male"},
{"id":5,"first_name":"Norbie","last_name":"Creagh","email":"ncreagh4@ocn.ne.jp","gender":"Male"},
{"id":6,"first_name":"Evangelia","last_name":"Davidovic","email":"edavidovic9@who.int","gender":"Female"}]

app.get('/',(req , res )=>res.send('Hello'))

app.get('/employee',(req , res )=>
{
    res.json(employeesjson)
})
app.post('/employee',(req , res )=>
{
    var employees = req.body;
    employeesjson.push(employees)
    res.json(employeesjson)
})

app.delete('/employee/:index',(req,res)=>
          {
    var index = req.params.index;
    employeesjson.splice(index,1);
    res.json(employeesjson);
})





app.listen(port ,() => console.log(`Example ${port}`))