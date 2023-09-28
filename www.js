const http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Madis Valliste, veebiprogamine 2023</title></head><body>');
	res.write('<h1>Madis Valliste</h1><p>see veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ<a> informaatika eriala õppetöö raames.<p/><p>Mulle meeldib kodus oma scripte teha, et aidata kodustetöödega.<p/>');
	res.write('h1></body></html>');
	//valmis saada öra
	return res.end();
}).listen(5118);

//madis :5118

