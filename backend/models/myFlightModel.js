import mongoose from "mongoose";

const {Schema} = mongoose;

const myFlightSchema = new Schema({
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    company: { type: String, required: true },
    departureCity: { type: String, required: true },
    departureCountry: { type: String, required: true },
    departureAirport: { type: String, required: true },
    departureAirportCode: { type: String, required: true },
    departureHour: { type: String, required: true },
    arrivalCity: { type: String, required: true },
    arrivalCountry: { type: String, required: true },
    arrivalAirport: { type: String, required: true },
    arrivalAirportCode: { type: String, required: true },
    arrivalHour: { type: String, required: true },
    stop: { type: String, required: true },
    cost: { type: Number, required: true },
    date: { type: Date, required: true },
}, 
{ timestamps: true }
);

const MyFlight = mongoose.model("MyFlight", myFlightSchema)

export default MyFlight;