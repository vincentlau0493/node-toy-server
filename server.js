var http = require( 'http' );
var fs = require( 'fs' );
var parse = require( 'url' ).parse;
var join = require( 'path' ).join;
var formidable = require( 'formidable' );

var root = './public';

exports.server = http.createServer(function(req,res){


	if ('GET' == req.method) {
		var path = parse(req.url).pathname;
		var wholePath = join(root, path);
		fs.stat(wholePath, function(err, stat){
			if (err) {
				if ('ENOENT' == err.code) {
					res.statusCode = 404;
					res.end('NOT FOUND');
				} else {
					res.statusCode = 500;
					res.end('INTERNAL SERVER ERROR');
				}
			} else {
				//success
				res.setHeader('Content-Length', stat.size);
				var stream = fs.createReadStream(wholePath);
				stream.pipe(res);
				stream.on('error',function(){
					res.statusCode = 500;
					res.end('INTERNAL SERVER ERROR');				
				});
			}
		});
	} else {
		//POST
		var form = new formidable.IncomingForm();

		form.on('field', function(field, value){
			console.log(field);
			console.log(value);
		});
		form.on('file', function(name, file){
			console.log(name);
			console.log(file);
		});

		form.on('end', function(){
			res.end('Check info on console!');

		});
		form.parse(req);
	}

});




