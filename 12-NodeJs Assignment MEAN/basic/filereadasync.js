var fs = require('fs');


console.log('starting of flow...')

fs.readFile('./files/config.json', (err, configdata)=>{
    
    
    console.log('...'+configdata);
    
    var data=JSON.parse(configdata);
    console.log(data.ip);
    console.log(data.port);

})


console.log('finishing the flow...')