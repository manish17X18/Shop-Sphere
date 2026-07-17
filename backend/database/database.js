const mongoose=require('mongoose');
require('dotenv').config();

const databaseConnection=async()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("Database connected Successfully")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports=databaseConnection