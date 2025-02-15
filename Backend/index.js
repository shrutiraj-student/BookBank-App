import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import router from "./route/book.route.js"
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongeoDB
try{
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  console.log("Connect to mongoDB")
}catch{
  console.log("Error conect to mongoDB",error);
}
//definting routes
app.use("/book",router);

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`);
});