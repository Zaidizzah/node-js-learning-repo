import http from "http";

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("walwe cikkkk!");
  })
  .listen(8000);
