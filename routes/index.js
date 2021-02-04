const express = require("express");
const path = require("path");
const app = express();

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    app.get("/pricing", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/pricing.html"))
    })

    app.get("/location", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/location.html"))
    })

    app.get("/faqs", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/faqs.html"))
    })

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/contact.html"))
    })

    app.get("*", function (req, res) {
        res.redirect('/');
    });

}