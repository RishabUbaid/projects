import express from "express";
import path from "path";

const app = express();

app.use(express.static("./dist"));

// app.use("/api",router);

app.get("/*",(req,res) =>{
    return res.sendFile(path.resolve("./dist/index.html"))
});

app.listen(3000, error =>{
    if (error) return console.log(error);
    console.log("server started");
});