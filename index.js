const express = require("express");

const server = express();

server.get("/test", (req, res) => {
  //   return res.send("Hello World");
  return res.json({ message: "Hello, Sergio" });
});

server.listen(3003);
