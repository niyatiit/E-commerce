import express from 'express'
import { adminLogin, login, register } from '../controllers/user.controller.js'



const userRoute = express.Router()

userRoute.post('/login',login)
userRoute.post('/register',register)
userRoute.post('/admin-login',adminLogin)

export {userRoute}