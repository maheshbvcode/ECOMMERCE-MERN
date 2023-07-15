const ErrorHandler = require("../utils/ErrorHandler");


const errors = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "internal Server Error"

    //wrong mongoDb id error
    if (err.name === 'CastError') {
        const message = `Resources not found this id.. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate Key ${Object.keys(err.keyValue)} Entered `;
        err = new ErrorHandler(message, 400);
    }

    // wrong jwt error 
    if (err.name === "JsonWebTokenError") {
        const message = `your url is invalid please try again later`;
        err = new ErrorHandler(message, 400);

    }

    //jwt expired
    if (err.name === 'TokenExpiredError') {
        const message = `Your Url is expired please try again later!`;
        err = new ErrorHandler(message, 400);

    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
};

module.exports = errors;