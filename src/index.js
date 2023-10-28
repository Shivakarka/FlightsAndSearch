const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

setupAndStartServer();
