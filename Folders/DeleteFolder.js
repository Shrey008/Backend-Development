const fs = require('fs');

fs.rm("creation",{recursive:true},function(err){
    if(err) console.log(err);
    else console.log("folder delted");
})