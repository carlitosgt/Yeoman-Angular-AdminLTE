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
app.get('/news_api', function(req, res){

	url = 'https://tinhte.vn';
	var result, source;

	request(url, function(error, response, html){
		var result=[];
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
});

app.listen('8080');

console.log("Server on going 8080");

exports = module.exports = app;
