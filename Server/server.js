import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import connectCloudinary from './config/cloudinary.js'
import { userRoute } from './routes/user.route.js'
import productRouter from './routes/product.route.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// middlware
app.use(express.json())
app.use(cors())


// API endpoints
app.use('/api/user' , userRoute)
app.use('/api/product' , productRouter)

app.get('/',(req,res)=>{
    res.send("Backend is start sucessfully")
})

app.get('/api/product/list',(req,res)=>{
    res.send("data")
})
app.listen(port,()=>{
    console.log('Server is running in port : ' + port)
})