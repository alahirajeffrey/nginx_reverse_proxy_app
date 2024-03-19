const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Homepage running with nginx as reverese proxy");
});

app.get("/hello-world", (req, res) => {
  res.send("Express app running with nginx as reverese proxy says hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
