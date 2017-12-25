var http = require('http');
var fs = require('fs');
var request = require('request');
var app = http.createServer(function(req,res){

 fs.readFile("advertisements.json", "utf8",
   function(err, contents){

	res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.write(contents);
	
	res.end();
   }
 
 );
 /*
 request("https://api.mcmakler.de/v1/advertisements",
{json:true}
, function(error, response, body){
	console.log("answer gotten");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const text = JSON.stringify(body);
    res.write(text);
	
	res.end();

}
);*/
});
app.listen(3000);

	console.log("started");
