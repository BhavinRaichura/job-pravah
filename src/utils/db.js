import mongoose from "mongoose"

let isConnected = false
export async function connectToDB(){
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
      }
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "testdb",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected")
        isConnected = true
    }
    catch (err){
        console.log("Mongodb is anable to connect")
        console.error(err)
    }
}