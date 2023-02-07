import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import userRoute from "./routes/userroute.js";
import bodyparser from "body-parser";
import path from "path";
import morgan from "morgan";
import taskRoute from "./routes/taskroute.js";
import cors from "cors";



const app = express();
app.use(cors());
//app.use(express.static('Assests'));

dotenv.config( { path : '.env'} );
dbConnect();
// log requests
app.use(morgan('tiny'));

app.use(express.json());

app.use(bodyparser.urlencoded({ extended : true}))

//app.set("view engine", "ejs")

app.use("/api/v1/users", userRoute);
app.use("/api/v1/task", taskRoute);

//app.use('/Assests', (express.static('Assests')));
//app.use('/js', express.static(path.resolve(__dirname, "Assets/js")))

//middleware


const PORT = process.env.Port || 7007;
app.listen(PORT,console.log(`Server is running at ${PORT}`))