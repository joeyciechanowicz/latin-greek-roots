import http from "node:http";

http.createServer((req, res) => res.end("Bun!")).listen(8080);
