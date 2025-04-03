const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');

const connectToDB = async ()=> {
    try{
        const DB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected ${DB.connection.host}`);
    }
    catch(error){
        console.error(error)
        process.exit(1);
    }
}
module.exports = connectToDB;
