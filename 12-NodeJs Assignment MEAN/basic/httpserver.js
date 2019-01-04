const http = require('http');
const fs = require('fs');

var port = 8080;

//reading port from config jsons

fs.readFile('./files/config.json', (err, configdata)=>{
    
    console.log('...'+configdata);
    var data=JSON.parse(configdata);
    console.log(data.ip);
    console.log(data.port);
    port = data.port;

})


//reading sync will work

var configdata = fs.readFileSync('./files/config.json')
var data=JSON.parse(configdata);
    console.log(data.ip);
    console.log(data.port);
    port = data.port;


const server = http.createServer((req,res)=>
                                {
    console.log(req.url);
    
    fs.readFile('./files'+req.url,(err,data)=>
               {
         
        if(err)
            {
                console.log(err);
                res.statusCode = 404
                res.end('page not found')
                 
            }
        else{
           
            res.statusCode = 200
            res.end('' + data)
        }
        
        
    })
    
})



//port value passed
server.listen(port,() => console.log('listening to port :'+port));