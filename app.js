const express = require('express');
const app = express();

app.get("/",(req,res)=>res.send("qaqam rehmancik"))

app.listen(3000,()=>console.log("app listenig 3000"));