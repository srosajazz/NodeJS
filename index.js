const express = require("express");
const server = express();
server.use(express.json());

// Query params = ?test=1
// Route params = /users/1
// Request body = { "name": "Sergio", "email": "sergio@gmail.com"}
//localhost:3000/users/123244
// CRUD => Create, Read, Update, Delete

const users = ["Sergio", "Mario", "Jose"];

//MiddleWare Global
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Method: ${req.method}; URL: ${req.url} `);
  next();

  console.timeEnd("Request");
});

//MiddleWare Local
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name required" });
  }
  return next();
}
//check if user exist in the array
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!users) {
    return res.status(400).json({ error: "User does not exist" });
  }

  req.user = user;
  return next();
}

//Alter req function

//route
server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json(req.user);
});

//Create new use
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

//Edit
server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});
//Delete
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3003);

/**
 * Documents:
 * 1.  return res.send("Hello World");
 * return res.json({ message: "Hello, Sergio" });
 * //   return res.json({ message: `Hello, ${name}` });
 */
