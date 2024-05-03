const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");
const { createError } = require('./utils/error');
require("dotenv").config();

const public_key = process.env.CLERK_PUBLIC_KEY;

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(ClerkExpressRequireAuth({
    authorizedParties:["http://localhost:5173"],
    jwtKey:public_key,
    onerror: (err, req, res, next) => {
        next(createError(401, err.message))
    }
}))
app.use(express.urlencoded({ extended: true }));
app.use("/apply", require('./routes/applyRoute'));


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(5000,async () => {
    console.log('Server started on port 5000');
})