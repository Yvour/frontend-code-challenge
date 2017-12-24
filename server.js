var http = require('http');

var request = require('request');
var app = http.createServer(function(req,res){

 res.setHeader('Content-Type', 'application/json');
 
 request("https://api.mcmakler.de/v1/advertisements",
{json:true}
, function(error, response, body){

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
	//res.writeHead(200, {"Content-Type": "application/json"});
	console.log("sending response");
	const text = JSON.stringify(body);

	console.log("length " + text.length);
    res.write(text);
	
	res.end();
	console.log("ended");
}
);
});
app.listen(3000);

	console.log("started");
