import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors  from "cors";   //cors is using  to allow htttp request from backend to frontend
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());  //cors is a middle ware function
app.use(express.json()); //its a middle ware for parsing  json data for testing Api 
config();
const PORT = process.env.PORT || 4000;
const Uri = process.env.MongoDBUri;

//connection to mongoddb

try {
  mongoose.connect(Uri, {
    // for mongodb coection building

    // useNewUrlParser:true,
    // useUnifieldTopolgy:true

  }).then(() => {
    console.log("MongoDB connection successfully!");
  });
}
catch (error) {
  console.log("Error", error);

}

//Defining routes or api calling

app.use("/book" ,bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});