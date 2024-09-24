import express from "express"
import * as flightController from "../controllers/flightController.js"

//* controllers klasörü içindeki ilgili fonksiyonları flightController adını verdiğimiz değişkenle çekiyoruz
//* Yönlendirme yapmak için express içinden Router'ı çektik 
//* sorgunun yanına birde id gelirse farklı fonksiyonlar çağırıyoruz.
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