const express =  require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();


//db connection thru env file
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connected to db"))
    .catch((error)=>console.log("error found", error));
// console.log(process.env);

// DB connection
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb+srv://Rekha:Rekha13@cluster0.uihvcdf.mongodb.net/").then(console.log("connected to db"));



// mongoose.connect( "mongodb+srv://Rekha:Rekha@13@cluster0.uihvcdf.mongodb.net", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify:true
//   })
//     .then(
//     console.log("connected to DB")
// ).catch((err)=>
//     console.log("error", err)
// );



app.get("/", (req, res)=>{
res.send("Hi")
console.log("hello rekha")
});

app.listen("9000",() =>{
    console.log('server is ruuning on port 9000');
} )
