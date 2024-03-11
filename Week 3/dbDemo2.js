const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shashankxrm:iNCORRECT%4045@cluster0.mwm4ybk.mongodb.net/userappnew");
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
    });

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser  = await User.findOne({username: username});
    if(existingUser){
        return res.status(403).json({
            msg: "User already exists",
        });
    }
    const user = new User({
        name: name,
        username: username,
        password: password,
    });
    user.save();
    res.json({
        msg: "User created successfully",
    });
}); 
app.listen(3000); 