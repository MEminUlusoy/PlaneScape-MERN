import Flight from "../models/flightModel.js";

const createFlight = async (req,res)=>{
    try {
        const flight = await Flight.create(req.body)
        res.status(201).json({
            succeded: true,
            flight
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const getAllFlights = async (req,res)=> {

    // try {
    //     const flight = await Flight.find({})
    //     res.status(200).json({
    //         succeded: true,
    //         count: flight.length,
    //         data: flight
    //     })

    const { departureCity, arrivalCity, startDate, endDate } = req.query;
    try {
        const filter = {};
        if (departureCity) filter.departureCity = departureCity;
        if (arrivalCity) filter.arrivalCity = arrivalCity;
        if (startDate && endDate) {
            filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
        }
        
        const flights = await Flight.find(filter);
        res.status(200).json({
            succeded: true,
            count: flights.length,
            data: flights
        });
        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const getAFlight = async (req,res)=> {
    try {
        const flight = await Flight.findById({_id: req.params.id})
        res.status(200).json({
            succeded: true,
            flight
        })       
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })            
    }
}


const updateFlight = async (req,res) => {
    try {
        const flight = await Flight.findByIdAndUpdate({_id: req.params.id}, req.body)

        if(!flight){
            return res.status(404).json({message: "Flight Not Found" })
        }

        res.status(200).send({
            succeded: true,
            message: "Updated Successfully"
        })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error

        })
    }
}


const deleteFlight = async (req,res) => {
    try {
        const flight = await Flight.findByIdAndDelete({_id: req.params.id})

        if(!flight){
            return res.status(404).json({message: "Flight Not Found"})
        }

        res.status(200).json({
            succeded: true,
            message: "Flight Deleted Successfully"
        })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

export {createFlight, getAllFlights, getAFlight, updateFlight, deleteFlight}