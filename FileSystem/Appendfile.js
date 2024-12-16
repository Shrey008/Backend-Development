 
const fs = require('fs');

fs.appendFile("abcd.txt","appended data",function(err){
    if(err) console.log(err);
    else console.log("data appended");
});