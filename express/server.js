import express from "express";
import dotenv from "dotenv";

import conn from "./connection.js";
import router from "./router.js";

dotenv.config();

const app = express();

app.use(express.json({
  limit:"5mb"
}));
// app.use("/api".customMW);
app.use(express.static("./static"));
// app.use("/abcd", customMW);
app.use("/api",router);

app.get("/", (req, res) => {
  return res.send("this is express server")
})

conn()
.then(() => {
  app.listen(process.env.PORT, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Server started");
  });
})
.catch(error => {
    console.log(error);
})