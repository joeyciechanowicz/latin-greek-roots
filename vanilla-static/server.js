const express = require('express');
const gzipStatic = require('connect-gzip-static');
const app = express();

app.use(gzipStatic(__dirname + '/dist'));

const port = process.env.PORT || 8080;
app.listen(port, (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`Listening on http://localhost:${port}`);
});
