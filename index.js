import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from  'cors'
import routes from './routes.js'

const app=express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json())
app.use(cors())

let db=mongoose.connect('mongodb://localhost:27017/dev_api_js',{useMongoClient:true})


routes(app);

app.listen(3000,()=>{
	console.log('express teste');
})