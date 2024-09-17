import express from "express";
import cors from "cors";
import db from "./config/dbConnect.js";
import metaDataRoute from './route/metadata.route.js';
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 5550;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/",metaDataRoute);

    
db()
.then(() => {
    app.listen(PORT, () => {
        console.log("Server activated on PORT", PORT);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

