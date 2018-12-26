var fs = require('fs');


console.log('starting of flow...')

fs.readFile('./files/test.txt', (err, data)=>{
    
    
    console.log('...'+data)

})


console.log('finishing the flow...')