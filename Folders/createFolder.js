const fs =  require('fs');

fs.mkdir("creation",function(err){
    if(err) console.log(err);
    else console.log("folder created");
});