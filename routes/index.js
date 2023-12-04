var express = require("express");
var router = express.Router();
const { DateTime } = require("luxon");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: DateTime.fromJSDate(new Date()).toLocaleString(
            DateTime.DATE_MED
        ),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: DateTime.fromJSDate(new Date()).toLocaleString(
            DateTime.DATE_MED
        ),
    },
];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Message Board", messages: messages });
});

router.post("/new", function (req, res, next) {
    let messageUser = req.body.messageUser;
    let messageText = req.body.messageText;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

module.exports = router;
