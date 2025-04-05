require('dotenv').config();
const connectToDB = require('./db/db');
const app = require('./app.js');
connectToDB()
.then(()=>{
    app.on("error", (error)=> {
        console.log("Error!",error);
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running at ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MongoDB Connection Failed!", error);
})