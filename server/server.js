import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
import mongoose from "mongoose";
const morgan = require("morgan");
require('dotenv').config();

const app = express();

//mongodbに接続するための処理
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connected", err))

//middleware
//オリジン間リソース
app.use(cors());
app.use(morgan("dev"))
//これでjson形式がで帰ってくる
app.use(express.json());

// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT

app.listen(8000, () => console.log(`Server is running on port 8000 ${port}`));
