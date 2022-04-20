const express = require("express");
const mongoose = require('mongoose')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect(`mongodb+srv://dumpo:${"apple"}@cluster0.3cizl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function() {
    console.log("Connected successfully")
});

const UserSchema = new mongoose.Schema({
    name: {type: String,}, email: {type: String}, password: {type: String}
});

const User = mongoose.model('userSchema', UserSchema)

app.post("/register_user", async (request, response) => {
    const user = new User(request.body);
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/login_user", async (request, response) => {
    const {username, password } = request.body;

    const user = await User.findOne({username, password}).lean()

    response.json({ user: user})
});

app.get("/users", async (request, response) => {
    const users = await User.find({});
    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server up at ${PORT}`)
})
