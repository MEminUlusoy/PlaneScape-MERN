//*myFlightModel.js içinden aldığımız modeli MyFlight ismiyle çekiyoruz
import MyFlight from "../models/myFlightModel.js";


//* FlightDetails.jsx sayfasından Buy Ticket butonuna basınca verimiz create edilecek
//* bir sorun olursa görelim diye try-catch bloğu içinde yazdık
const createMyFlight = async (req,res) => {
    try {
        const myFlight = await MyFlight.create(req.body)

        res.status(201).json({
            succeded: true,
            myFlight
        })
        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}


//* Bütün myFlights verileri gözükcek
const getAllMyFlights = async (req,res) => {
    try {
        const myFlight = await MyFlight.find({}).sort({ createdAt: -1 })
        res.status(200).json({
            succeded: true,
            count: myFlight.length,
            data: myFlight

        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

export {createMyFlight, getAllMyFlights }