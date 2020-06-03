const http = require('http');
const path = require('path');
const fs = require('fs');
// const os = require('os');
const url = require('url');

const callBackForServer = (req, res) => {
	let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
	let extname = path.extname(filePath);


	// Initial content type
	let contentType = 'text/html';

	// Check ext and set content type
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.ico':
			contentType = 'image/x-icon'
			
	}

	fs.readFile(filePath, (err, data) => {
		if (err) {
			throw err;
		} else {
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(data, 'utf8');
		}
	});
  
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>sup</h1>')
};


const projServer = http.createServer(callBackForServer);

const PORT = process.env.PORT || 3000;

projServer.listen(PORT, () => console.log(`server listening on port ${PORT}`));


//!!node examples
// fs.writeFile(path.join(__dirname, 'sample.txt'), 'sup', err => {
// 	if(err) throw err;
// 	console.log('sup worked')
// 	fs.appendFile(path.join(__dirname, 'sample.txt'), '\nsup again and again', err => {
// 		if (err) throw err;
// 		console.log('append level sup bitch')
// 	})
// })

// fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// })