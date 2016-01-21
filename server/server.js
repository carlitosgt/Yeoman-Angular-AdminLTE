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
			var $ = cheerio.load(html);			
			$('.recentNews').each(function(i){
				result.push({
					"title":$('.recentNews div a').eq(i).text().replace(/\t/gi,'').replace(/\n/gi,''),
					"author":$('.postedBy').eq(i).text().replace(/\t/gi,'').replace(/\n/gi,''),
					"image":$('.newsText div a img').eq(i).attr('src'),
					"data":$('div.newsText').eq(i).text().replace(/\t/gi,'').replace(/\n/gi,'')
				});
			});
		}
		res.send(JSON.stringify(result));
	});
});

app.listen('8080');

console.log("Server on going 8080");

exports = module.exports = app;