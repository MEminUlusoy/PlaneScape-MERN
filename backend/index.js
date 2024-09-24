import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import cors from "cors";
import flightRoute from "./routes/flightRoute.js"
import myFlightRoute from  "./routes/myFlightRoute.js"

dotenv.config();
conn();

const app = express();
const port = process.env.PORT;
app.use(express.json())

app.use(cors())

/* app.use( 
    cors({
        origin: "http://localhost:3000",
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type"],
    })
)  */

app.get("/", (req,res)=>{
    res.status(234).send("Welcome my friend!")
})

app.use("/flights", flightRoute)
app.use("/myFlights", myFlightRoute)



app.listen(port,()=>{
    console.log(`App is listening to: ${port}`);
})