const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../db/model/user.model");
const Shop = require("../db/model/shop.model");

exports.isAuthenticated = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login to continue", 401));
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
})

exports.isSeller = catchAsyncErrors(async(req,res,next)=>{
    const {seller_token} = req.cookies;

    if(!seller_token){
        return next(new ErrorHandler("Please Login to continue", 401));
    }

    const decoded = jwt.verify(seller_token,process.env.JWT_SECRET_KEY);

    req.seller = await Shop.findById(decoded.id);

    next();
})

