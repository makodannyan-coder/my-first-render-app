const http = require("http");

const server = http.createServer((req, res) => {
  res.end("My Cloud Server Is Online!");
});

server.listen(process.env.PORT || 3000, "0.0.0.0");
