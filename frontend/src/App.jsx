import React from 'react'
import {Routes, Route} from "react-router-dom"
import FlightDetails from './pages/FlightDetails'
import Home from './pages/Home'
import MyFlights from './pages/MyFlights'


//*Sayfa dağılımlarına hangi .jsx dosyası gelecek bunu Routes ve Route ile yaptık
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<FlightDetails/>} />
      <Route path='/myFlights' element={<MyFlights/>} />
    </Routes>
  )
}

export default App