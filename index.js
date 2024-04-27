import app from './app.js'
import dotenv from 'dotenv'
dotenv.config({path:"./.env"})
import { db } from './db/index.js'
db()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is running on the port ${process.env.PORT}`)
    })
})
.catch((error)=>{

})