import express from "express";
import "dotenv/config";
import homeRouter from "./routes/root.js"
import userRouter from "./routes/userRoute.js"
import mongoose from "mongoose";


const app = express();
app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use("/", homeRouter)
app.use("/auth", userRouter)
const port = process.env.PORT;
const mongodb_uri = process.env.MONGODB_URI

const startServer = async () => {
    try{
        const connected = await mongoose.connect(mongodb_uri)
        if(connected) {
            console.log("successfully connected to database")
            app.listen(port, () => console.log(`connected to db and server running on port ${port}`))
        } else{
            console.log("unable to connect to database")
        }
    } catch(error) {
        console.log(error)
        throw error
    }
}

startServer()