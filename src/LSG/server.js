const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

app.listen(3000);
app.use(bodyParser.json());

app.get("/test", (req, res) => res.send("Hello World"));
