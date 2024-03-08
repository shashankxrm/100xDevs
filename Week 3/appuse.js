// app.use(express.json());
const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const numofKidneys = kidneys.length;

    res.send("You have "+ numofKidneys + " kidneys");
});
app.listen(3000);