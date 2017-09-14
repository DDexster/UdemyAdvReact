const express = require("express"),
    app = express(),
    http = require("http"),
    morgan = require("morgan"),
    router = require("./router"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:auth/auth");

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const server = http.createServer(app),
    port = process.env.PORT || 8080;

server.listen(port);
console.log(`Server is listening on port ${port}`);
