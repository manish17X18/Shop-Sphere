const express=require('express');
const app=express();
const database=require('./database/database')
const user=require('./routes/route')

require('dotenv').config();
const PORT=process.env.PORT||4001;

app.use(express.json());

database();

app.use('/api/v1',user);

app.listen(PORT,()=>{
    console.log(`Connected to Port:${PORT}`)
})