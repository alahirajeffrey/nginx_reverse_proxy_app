const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Homepage runing with nginx as reverese proxy");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
