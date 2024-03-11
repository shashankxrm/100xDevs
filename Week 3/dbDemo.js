const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shashankxrm:iNCORRECT%4045@cluster0.mwm4ybk.mongodb.net/userappnew"); 

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
    });

const user = new User({
    name: "Shashank",
    email: "shashank@gmail.com",
    password: "123456",
    });

user.save();