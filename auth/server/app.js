const express = require("express"),
    app = express(),
    http = require("http"),
    morgan = require("morgan"),
    bodyParser = require("body-parser");

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

const server = http.createServer(app),
    port = process.env.PORT || 8080;

server.listen(port);
console.log(`Server is listening on port ${port}`);
