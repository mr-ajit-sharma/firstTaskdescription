import mongoose from 'mongoose'
export const db=async()=>{
    try {
        const dbconnection=await mongoose.connect(process.env.MONGO_URI)
        console.log(`database is connected on the port ${process.env.PORT}`)
    } catch (error) {
        console.log("error in the db connection ",error)
    }
}