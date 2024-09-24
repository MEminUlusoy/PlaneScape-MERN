import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import cors from "cors";
import flightRoute from "./routes/flightRoute.js"
import myFlightRoute from  "./routes/myFlightRoute.js"

//* dotenv dosyasından veri çekebilmek için yazmamız gerekti 
dotenv.config();
//* database bağlantısı için 
conn();

const app = express();
const port = process.env.PORT;
//* json ifadeleri görebilmek için
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

//* url'den gelen /flights veya /myFlights isteklerini routes klasörü içindeki dosyalara yolluyor
//* routes klasörü , controllers klasörü içindeki fonksiyonları çekiyor. Bu fonksiyonlarda backend sorgularını gerçekleştiriyor.
app.use("/flights", flightRoute)
app.use("/myFlights", myFlightRoute)



app.listen(port,()=>{
    console.log(`App is listening to: ${port}`);
})