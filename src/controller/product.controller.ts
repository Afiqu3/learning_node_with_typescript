import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.types";
import { log } from "console";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");
  console.log(url);
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  // console.log("This is the actual id : ", id);

  if (url === "/products" && method === "GET") {
    const products = readProduct();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "This is products route", data: products }),
    );
  } else if (method === "GET" && id !== null) {
    const products = readProduct(); // [{}]
    // console.log(products)

    const product = products.find((p: IProduct) => p.id === id); // id === id
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "This is product route", data: product }),
    );
    // try {
    //   // Get Single Product
    //   const products = readProduct(); // [{}]

    //   const product = products.find((p: IProduct) => p.id === id); // id === id
    //   if (!product) {
    //     return sendResponse(res, 404, false, "Product not found!");
    //   }

    //   return sendResponse(
    //     res,
    //     200,
    //     true,
    //     "Product retrived succeefully",
    //     products,
    //   );
    // } catch (error) {
    //   return sendResponse(res, 500, false, "Something went wrong!", error);
    // }
  }
};
