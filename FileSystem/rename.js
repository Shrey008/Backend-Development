const fs = require('fs');

fs.rename("abcd.txt","hey.txt",function(err){
    if(err) console.log(err);
    else console.log("file renamed");
})