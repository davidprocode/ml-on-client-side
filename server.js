const express = require("express");
const server = express();

const PORT = 3000;

server.use((req, res, next) => {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

server.use(express.static("./static"));

server.listen(PORT, () => {
  console.log(`Serving on ${PORT}`);
});
