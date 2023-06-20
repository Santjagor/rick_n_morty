const http = require("http")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
}).listen(3001, "localhost")