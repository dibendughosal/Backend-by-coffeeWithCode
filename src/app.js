const express = require('express');
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');
app.on("error",(error)=>{
    console.error(error);
    throw error
})
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser())

const userRouter = require('./routes/user.routes');
app.use("/api/v1/users", userRouter);

module.exports = app;