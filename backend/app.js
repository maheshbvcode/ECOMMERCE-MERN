const express = require("express");
const ErrorHandler = require("./middlewares/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");




app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));



//config
if (process.env.NODE_DEV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env"
    })
};

//import routes
const user = require("./controller/user");
const shop = require("./controller/shop");

app.use("/api/v2/user", user);
app.use("/api/v2/shop",shop);

//For Error Handling
app.use(ErrorHandler);

module.exports = app;



