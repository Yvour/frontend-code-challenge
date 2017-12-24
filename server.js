var http = require('http');

var request = require('request');
var app = http.createServer(function(req,res){

 res.setHeader('Content-Type', 'application/json');
 
 request("https://api.mcmakler.de/v1/advertisements",
{json:true}
, function(error, response, body){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const text = JSON.stringify(body);
    res.write(text);
	
	res.end();

}
);
});
app.listen(3000);

	console.log("started");
