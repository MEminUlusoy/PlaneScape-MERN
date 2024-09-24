import express from "express"
import * as myFlightController from "../controllers/myFlightController.js"

const router = express.Router()

//* controllers klasörü içindeki ilgili fonksiyonları myFlightController adını verdiğimiz değişkenle çekiyoruz
//* Yönlendirme yapmak için express içinden Router'ı çektik 
router
    .route("/")
    .post(myFlightController.createMyFlight)
    .get(myFlightController.getAllMyFlights)



export default router;