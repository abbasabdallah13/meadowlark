const express = require("express");
const app = express();
const handlebars = require("express3-handlebars").create({
  defaultLayout: "main",
});
const names = require("./my_modules/names");

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.handlebars");
});

// const names = ["abbas", "ali", "mhmd", "hussein"];
app.get("/about", (req, res) => {
  // let randomName = names[Math.floor(Math.random() * names.length)];
  // res.render("about", { names: "hello " + randomName });
  res.render("about", { names: names.randomNames() });
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), () => {
  console.log("server started on localhost:" + app.get("port"));
});
