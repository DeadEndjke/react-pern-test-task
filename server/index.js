import express from "express"
import 'dotenv/config'
import sequelize from "./db.js";
import cors from 'cors'
import authRoute from './routes/Auth.js'

import { User, Contact } from './models/models.js'

const app = express();

app.use(cors())
app.use(express.json())


app.use('/api/auth', authRoute)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, () => console.log(`server started at port ${process.env.PORT}`))
    } catch (error) {
        console.log(e)
    }

}

start();

