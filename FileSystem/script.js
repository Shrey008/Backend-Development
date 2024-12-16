const fs = require('fs');

fs.writeFile("abcd.txt","hey hello",function(err){
    if(err) console.log(err);
    else console.log("file created successfully");
})