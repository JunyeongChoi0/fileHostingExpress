const express = require("express");
const json = require("./config.json");
const app = express();
const cors = require("cors");

const port = 9000;
app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(json);
app.get("/", (req, res) => res.json(json));
