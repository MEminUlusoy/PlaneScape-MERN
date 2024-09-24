import express from "express"
import * as flightController from "../controllers/flightController.js"

const router = express.Router()

router
    .route("/")
    .post(flightController.createFlight)
    .get(flightController.getAllFlights)

router
    .route("/:id")
    .get(flightController.getAFlight)
    .put(flightController.updateFlight)
    .delete(flightController.deleteFlight)

export default router