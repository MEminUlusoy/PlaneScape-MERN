import express from "express"
import * as myFlightController from "../controllers/myFlightController.js"

const router = express.Router()

router
    .route("/")
    .post(myFlightController.createMyFlight)
    .get(myFlightController.getAllMyFlights)



export default router;