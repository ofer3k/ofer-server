const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/data", (req, res) => {
  res.send({ name: "ofer" });
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
