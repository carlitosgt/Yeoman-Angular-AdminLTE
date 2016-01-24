var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var path    = require("path");
app.use(express.static(path.join(__dirname,'/../dist')));
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.get('/api/news/:id', function(req, res){
	var newsId = req.params.id;
	var result =[];
	if(newsId=="tinhte"){		
		url = 'https://tinhte.vn';		
		request(url, function(error, response, html){
			if(!error){
				var $ = cheerio.load(html.replace(/\t/gi,'').replace(/\n/gi,''));			
				$('.recentNews').each(function(i){
					result.push({
						"title":$(this).find($('.newsTitle')).text(),
						"author":$(this).find($('.posted')).text(),
						"content":$(this).find($('.newsText')).text(),
						"image":$(this).find($('.bbCodeImage')).attr('src'),
						"url":"https://tinhte.vn/"+$(this).find($('.internalLink')).attr('href')
					});
				});
			}
			res.send(JSON.stringify(result));
		});
	}else if(newsId=="voz"){
		res.send('Hello world');
	}else{
		res.send(JSON.stringify(result));
	}
	
});

app.listen('8111');

console.log("Server on going 8111");

exports = module.exports = app;
