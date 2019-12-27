const express = require("express");
const server = express();
server.use(express.json());

// Query params = ?test=1
// Route params = /users/1
// Request body = { "name": "Sergio", "email": "sergio@gmail.com"}
//localhost:3000/users/123244
// CRUD => Create, Read, Update, Delete

const users = ["Sergio", "Mario", "Jose"];

//route
server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

//Create new use
server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

//Edit
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});
//Delete
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send("Delete Succefully!");
});

server.listen(3003);

/**
 * Documents:
 * 1.  return res.send("Hello World");
 * return res.json({ message: "Hello, Sergio" });
 * //   return res.json({ message: `Hello, ${name}` });
 */
