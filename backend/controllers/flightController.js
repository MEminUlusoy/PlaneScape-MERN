//* models klasörü içindeki flightModel.js veritabanını Flight ismiyle çektik
import Flight from "../models/flightModel.js";

//* Uçuş bileti üretmek için thunderCLient'dan üretiliyor sadece.
//* bir sorun olursa görelim diye try-catch bloğu içinde yazdık
const createFlight = async (req,res)=>{
    try {
        //* request'den aldığı bilgileri  veri tabanına Flight nesnesiyle create ediyor ve flight değişkenini json verisi olarak yolluyor.
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


//* requestden aldığı sorguları eğer varsa filter objesine atıyor. Date içinse aldığı tarih aralığında bilgi varsa bu bilgiyi filter objesine atıyor
//* filter objesi Flight modeli içerisine konularak, uygun veriler flights değişkenine veriliyor ve yollanıyor.
const getAllFlights = async (req,res)=> {

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


//* basılan verinin id'si url'ye yollanıyor ve bu url'deki id veritabanındaki id ile karşılaştırılıp uygun veriyi yolluyor
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

//* Yine aynı şekilde uygun olan id bulunuyor ve requestdeki bilgi ile değiştiriliyor update ediliyor.
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

//* uygun veri bulunuyor ve bu veri findByIdAndDelete fonksiyonu sayesinde siliniyor
//* eğer böyle veri yoksa bu id 'ye uygun o zaman "Flight Not Found" mesajı dönüyor
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