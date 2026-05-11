import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  //   console.log(req.url);
  //   console.log(req.method);
  if (req.url === "/" && req.method === "GET") {
    // console.log('first');
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is root route" }));
  } else if (req?.url?.startsWith("/products")) {
    // console.log('first');
    productController(req, res);
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
};
