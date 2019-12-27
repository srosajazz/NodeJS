const express = require("express");

const server = express();

// Query params = ?test=1
// Route params = /users/1
// Request body = { "name": "Sergio", "email": "sergio@gmail.com"}
//localhost:3000/users/123244

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Search User ${id}` });
});

server.listen(3003);

/**
 * Documents:
 * 1.  return res.send("Hello World");
 * return res.json({ message: "Hello, Sergio" });
 * //   return res.json({ message: `Hello, ${name}` });
 */
