const express = require("express");
const cors  = require("cors");
const helmet  = require("helmet");
const recipesRouter = require("./data/recipesRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/recipes",recipesRouter);

module.exports = server;