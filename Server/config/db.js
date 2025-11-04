import mongoose from 'mongoose'

const connectDB = async () =>{
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

    mongoose.connection.on('connected' , ()=>{
        console.log("Database connected ✅")
    })
}
export default connectDB