const http = require('http');
const path = require('path');
const fs = require('fs');

const callBackForServer = (req, res) => {
	let filePath = path.join(__dirname, 'RTPG', 'index.html');
	// console.log(filePath);
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
	}

	fs.readFile(filePath, (err, data) => {
		if (err) {
			throw err;
		} else {
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(data, 'utf8');
		}
	});
};

const projServer = http.createServer(callBackForServer);

const PORT = process.env.PORT || 3000;

projServer.listen(PORT, () => console.log(`server listening on port ${PORT}`));
