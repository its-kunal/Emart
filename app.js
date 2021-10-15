let express = require("express")
let app  = express()

app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.listen(7000,"localhost",()=>{
    console.log("listening on http://localhost:7000")
})
