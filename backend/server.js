const app = require("./app");
const connectDatabase = require("./db/connect");




//handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
})


//config
if (process.env.NODE_DEV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env"
    })
};

const port = process.env.PORT;

//connect db
connectDatabase();

//create server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


//unhandled promise 
process.on("unhandledRejection", (err) => {
    console.log(`shutting down the server for ${err.message}`);
    console.log(`shutting down the server for unhandle promise rejection`);

    server.close(() => {
        process.exit(1);
    });
})
