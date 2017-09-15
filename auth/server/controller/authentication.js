const jwt = require("jwt-simple");
const config = require("../config");
const User = require("../models/user");

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signUp = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: "You MUST provide Email AND Password" });
    }

    User.findOne({ email }, (err, existUser) => {
        if (err) {
            return next(err);
        }
        if (existUser) {
            return res.status(422).send({ error: "Email is in use!" });
        } else {
            const newUser = new User({ email, password });
            newUser.save((err) => {
                if (err) {
                    return next(err);
                } else {
                    res.json({ token: tokenForUser(newUser) });
                }
            });
        }
    });
};

exports.signIn = function(req, res, next) {
    res.send({token: tokenForUser(req.user)});
};