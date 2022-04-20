const express = require("express");
const User = require('./model/user')
const app = express();

app.get("/users", async (request, response) => {
    const users = await User.find({});
    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;
