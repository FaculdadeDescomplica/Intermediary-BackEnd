import express from "express";
import cors from "cors";
import pkg from 'body-parser';
import router from "./routes/routes.js";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.listen(3000, function(){
    console.log("Listening to port 3000");
})