import app from "../app.ts"
import mongoose, { Error } from "mongoose"

function connectDB() {
    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6`)
        .then(
            () => {
                console.log("!! MongoDB Connected !!!");
                app.listen(process.env.PORT,
                    () => {
                        console.log("Server is running on port " + process.env.PORT)
                    }
                )
            }
        ).catch(
            (err: Error) => {
                console.log("Error connecting to MongoDB" + err)
            }
        )
}

export default connectDB;