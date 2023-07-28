const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Karan" });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
