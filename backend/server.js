const express = require("express")

const app = express();

app.get("/", (req, res)=>{
    res.send("this is the home route for Ashwin Bhagat");
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000");
})