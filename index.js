const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Karan" });
});

app.get("/success", (req, res) => {
  res.render("success.ejs");
});

app.post("/contact", (req, res) => {
  users.push({ name: req.body.name, email: req.body.email });
  res.redirect("/success");
  console.log(users);
});

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(5000, () => {
  console.log("Example app listening on port 3000!");
});
