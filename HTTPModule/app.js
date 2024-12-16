const http =  require('http');

var server = http.createServer(function(req,res){
    res.end("helloo how are you brother");
})

server.listen(3000); 