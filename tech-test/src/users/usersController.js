const express = require("express");
const {
  getResult,
  newResult,
  reset,
} = require("./usersService");

const server = express();
server.use(express.json());

server.get("/user/:id", (req, res) => {
  const user = getResult(parseInt(req.params.id, 10))
  if (!user) {
    res.status(404).send("User not found")
  }
  res.send(user);
});

server.post("/user", (req, res) => {
  res.send(newResult(req.body));
});

module.exports = { default: server, resetScores: reset };
