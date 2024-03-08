const express = require("express");
const zod = require("zod")
const app = express();

const schema1 = zod.array(zod.number());
////////////////
/*
{
    email: string => email
    password: atleast 8 letter
    country: "IN", "US"
}
*/
const schema = zod.object({
    email: zod-string( ),
    password: z.string(),
    country: z. literal("IN").or(z.literal("US")),
    kidneys: z. array(z. number())
})
////////////////
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema1.safeParse(kidneys)
  res.send({
    response
  })
});


app.listen(3000);