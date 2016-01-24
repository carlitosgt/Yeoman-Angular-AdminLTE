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
	}else if(newsId=="it-ebooks"){
		url = 'http://it-ebooks.info/';		
		request(url, function(error, response, html){
			if(!error){
				var $ = cheerio.load(html.replace(/\t/gi,'').replace(/\n/gi,'').replace(/\r/gi,''));			
				$('.top').eq(1).find('img').each(function(i){
					result.push({
						"title":$(this).attr('alt'),
						"id":$(this).parent().attr('href').split('/')[2],
						"img":"http://it-ebooks.info"+$(this).attr('src')
					});
				});
			}
			res.send(JSON.stringify(result));
		});
	}else if(newsId=="movies"){
		url = 'https://www.cgv.vn/vn/movies/now-showing.html';		
		request(url, function(error, response, html){
			if(!error){
				var $ = cheerio.load(html.replace(/\t/gi,'').replace(/\n/gi,'').replace(/\r/gi,''));			
				$('.products-grid').find('.item').each(function(i){
					result.push({
						"title":$(this).find('.product-name').text(),
						"url":$(this).find('.product-name').find('a').attr('href'),
						"img":$(this).find('.product-image').find('img').attr('src'),						
						"genre":$(this).find('.movie-genre').find('.std').text(),
						"rating":5,
						"length":$(this).find('.product-image').attr('src'),
						"release_date":$(this).find('.movie-release').find('.std').text()
					});
				});
			}
			res.send(JSON.stringify(result));
		});
	}else{
		res.send(JSON.stringify(result));
	}
	
});

app.listen('8111');

console.log("Server on going 8111");

exports = module.exports = app;
