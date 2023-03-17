import express from "express";
import pkg from 'body-parser';
import router from "./routes/router.js";

import sequelize from "./utils/database.js";
import association from "./models/Associations.js";

import cors from "cors";

const app = express();
const { json, urlencoded } = pkg;


app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", router);
app.use(cors());

(async () => {
    try {
        association.associations();
        await sequelize.sync({force:true}); // forçar com force:true
        app.listen(3000, function () {
            console.log("Listening to port 3000");
        });
    } catch (err) {
        console.log(err);
    }
})();