const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "test",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Student = mongoose.model("students", studentSchema);

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Karan" });
});

app.get("/add", (req, res) => {
  Student.create({ name: "Unknown", email: "unknown@gmail.com" }).then(() => {
    res.send("Nice");
  });
});

app.get("/success", (req, res) => {
  res.render("success.ejs");
});

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;
  await Student.create({ name, email });
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
