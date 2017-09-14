const Authentication = require("./controller/authenication");

module.exports = function (app) {
    app.post("/signup", Authentication.signup);
};