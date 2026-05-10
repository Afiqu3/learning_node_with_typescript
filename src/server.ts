import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage, res) => {
  //   console.log(req.url);
  //   console.log(req.method);
  if (req.url === "/" && req.method === "GET") {
    // console.log('first');
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
  }
  else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});
