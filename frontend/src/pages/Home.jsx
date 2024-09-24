import React from 'react'
import { IoIosAirplane } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { HiUserCircle } from "react-icons/hi";
import { IoCarOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { GiPalmTree } from "react-icons/gi";
import { FaPlane } from "react-icons/fa6";
import { BiSolidPlaneLand } from "react-icons/bi";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { PiAirplaneLandingBold } from "react-icons/pi";
import { IoIosPaperPlane } from "react-icons/io";

import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FlightFilter from '../components/FlightFilter';
import { Link } from 'react-router-dom';


const Home = () => {

    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(false)

    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    const handleFilterChange = () => {
        setLoading(true);
        axios.get(`http://localhost:5555/flights?departureCity=${departureCity}&arrivalCity=${arrivalCity}&startDate=${startDate}&endDate=${endDate}`)
            .then((res) => {
                setFlights(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    
    
    
                    
      

    return (
        <div className='bg-[#F2F2F2]  h-screen w-screen flex flex-col'>
            {/* Navbar */}
            <div className='w-full h-[10%] flex'>
                <div className=' h-full w-[55%] flex items-center justify-start pl-3'>
                    
                    <div className='h-[33px] w-[33px] rounded-full bg-[#4a0096] border-none'>
                        <IoIosAirplane className='h-full w-[90%] text-[#f5f5f5] cursor-pointer' />
                    </div>
                    <h1 className='text-[#3f3f40] font-bold ml-2 cursor-pointer'>PLANE SCAPE</h1>

                </div>
                <div className='h-full w-[45%] flex'>
                    <div className='h-full w-1/4  flex items-center justify-center group'>
                        <a href="/myFlights" className='flex  items-center justify-center'>
                            <IoIosPaperPlane className='h-[16px] w-[16px] text-[#4a0096] cursor-pointer  transition ease-in-out duration-500 group-hover:-translate-y-1 group-hover:translate-x-1' />
                            <p className='text-[#797879] group-hover:text-[#3f3f40] hover:font-extrabold font-bold text-[14px] ml-1 cursor-pointer transition ease-in-out duration-500 group-hover:translate-x-1 '>My Flights</p>
                        </a>
                    </div>
                    <div className='h-full w-1/4  flex items-center justify-center cursor-pointer group'>
                        <FaTag className='h-[16px] w-[16px] text-[#4a0096] transition ease-in-out duration-500  group-hover:translate-x-1' />
                        <p className='text-[#797879] group-hover:text-[#3f3f40] hover:font-extrabold font-bold text-[14px] ml-1 transition ease-in-out duration-500 group-hover:translate-x-1 '>Deals</p>
                    </div>
                    <div className='h-full w-1/4  flex items-center justify-center cursor-pointer group'>
                        <TiWorld className='h-[20px] w-[20px] text-[#4a0096] transition duration-500 ease-in-out transform group-hover:rotate-180 group-hover:translate-x-1' />
                        <p className='text-[#797879] group-hover:text-[#3f3f40] hover:font-extrabold font-bold text-[14px] ml-0.5 transition ease-in-out duration-500 group-hover:translate-x-1'>Discover</p>
                    </div>
                    <div className='h-full w-1/4  flex items-center justify-center cursor-pointer group '>
                        <HiUserCircle className='h-[30px] w-[30px] text-[#4a0096] transition ease-in-out duration-500 group-hover:translate-x-1' />
                        <p className='text-[#797879] group-hover:text-[#3f3f40] hover:font-extrabold font-bold text-[14px] ml-0.5 transition ease-in-out duration-500 group-hover:translate-x-1'>Joane Smith</p>
                    </div>
                </div>

            </div>
            {/* Body */}
            <div className='w-full h-[90%] p-4'>
                {/* Inner-Body */}
                <div className='h-full w-full flex'>

                    {/* Left Div */}
                    <div className='h-full w-[78%]  flex flex-col'>
                        {/* Left- Top */}
                        <div className='w-full h-1/4 pr-10'>
                            <div className='h-full w-full rounded-xl bg-[#ffffff] flex flex-col pt-3 pl-6 pr-6'>

                                <div className='w-full h-[33%] flex '>
                                    <div className='h-full w-1/2 flex items-start  pt-3 '>
                                        <FaPlane className='text-[#3b3b3b] h-[20px] w-[20px]' />
                                        <h4 className='ml-2 text-[#303030] text-base font-bold'>BOOK YOUR FLIGHT</h4>
                                    </div>
                                    <div className='h-full w-1/2 flex  justify-end items-center'>
                                        <div className='h-[60%] w-[40%] rounded-full flex'>
                                            <div className='bg-[#4a0096] h-full w-1/2 rounded-l-full flex items-center justify-center cursor-pointer'>
                                                <p className='text-[#e5daef] text-sm font-semibold'>Round trip</p>
                                            </div>
                                            <div className='bg-[#F2F2F2] h-full w-1/2  rounded-r-full flex items-center justify-center cursor-pointer'>
                                                <p className='text-[#946cbe] text-sm font-semibold'>One way</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full h-[35%]  flex justify-between py-3'>
                                    <div className=' h-full w-[49%]  flex justify-between'>
                                        <div className='border-2 border-[#dbdbdb] rounded-l-full h-full w-[49.5%] flex items-center justify-start'>
                                            <BiSolidPlaneTakeOff className='text-[#3a038c] h-[70%] w-[10%]  mb-1 ml-2 cursor-pointer' />
                                            <input className=' pl-2 outline-none' type="text" value={departureCity} onChange={(e)=>setDepartureCity(e.target.value)} placeholder='Departure'/>
                                        </div>
                                        <div className='border-2 border-[#dbdbdb] rounded-r-full h-full w-[49.5%] flex items-center justify-start'>
                                            <BiSolidPlaneLand className='text-[#3a038c] h-[70%] w-[10%]  mb-1 ml-2 cursor-pointer' />
                                            <input className=' pl-2 outline-none' type="text" value={arrivalCity}  onChange={(e)=>setArrivalCity(e.target.value)} placeholder='Arrival'/>
                                        </div>
                                    </div>
                                    <div className=' h-full w-[49%] flex justify-between '>
                                        <div className='border-2 border-[#dbdbdb] rounded-l-full h-full w-[49.5%] flex items-center justify-start'>
                                            <MdCalendarMonth className='text-[#3a038c] h-[70%] w-[10%]  mb-1 ml-2 cursor-pointer' />
                                            <input className='text-sm text-[#6d6d6d]' type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
                                        </div>
                                        <div className='border-2 border-[#dbdbdb] rounded-r-full h-full w-[49.5%] flex items-center justify-start'>
                                            <MdCalendarMonth className='text-[#3a038c] h-[70%] w-[10%]  mb-1 ml-2 cursor-pointer' />
                                            <input className='text-sm text-[#6d6d6d]' type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                {/* Buttton */}
                                <div className='w-full h-[32%]'>
                                    <div onClick={handleFilterChange} className='flex items-center justify-center bg-[#4a0096] hover:bg-[#6500cb] h-[70%] w-[10%] rounded-lg cursor-pointer'>
                                        <p className='text-[#f1ebf6] text-sm'>Show flights</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Left Bottom */}
                        <div className='w-full h-3/4 pt-8 pr-10 '>
                            <div className='h-full w-full flex '>
                                {/* Flights section */}
                                {
                                    loading ? (
                                        <Spinner />
                                    ) : (   
                                        <div className='h-full w-3/4 flex flex-col justify-between overflow-auto'>
                                            {/* Check if flights are available */}
                                            {flights.length === 0 ? (
                                                <div className='flex items-center justify-center h-full'>
                                                    <p className='text-lg text-gray-600'>Please enter where you want to go and what date you want to go.</p>
                                                </div>
                                            ) : (
                                                // Flight Div
                                                flights.map((flight, index) => (
                                                    <div key={flight._id} className='w-full h-[242px] mb-3 flex flex-col '>
                                                        {/* Flight Rounded Card */}
                                                        <div className='w-full h-[80%] bg-[#ffffff] rounded-tl-xl rounded-tr-xl rounded-br-xl flex flex-col pl-6 '>
                                                            <div className='w-full h-[18%] flex items-end '>
                                                                <p className='text-sm text-[#303030] font-bold '>{flight.departureCity} - {flight.arrivalCity}</p>
                                                            </div>

                                                            <div className='w-full h-[52%] flex '>
                                                                <div className='h-full w-1/5 flex flex-col py-2'>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <div className='flex items-end justify-start '>
                                                                            <PiAirplaneTakeoffBold className='text-base text-[#6d6d6d]' />
                                                                            <p className='text-[#6d6d6d] text-sm font-semibold ml-1'>Departure</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <p className='font-bold text-base text-[#303030]'>{flight.departureHour}</p>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-start '>
                                                                        <p className='text-[#6d6d6d] text-sm font-bold '>Airport: {flight.departureAirportCode}</p>
                                                                    </div>
                                                                </div>

                                                                <div className='h-full w-1/5 flex justify-start items-center'>
                                                                    <p className='text-[#6d6d6d] text-xs font-extrabold'>____________</p>
                                                                </div>

                                                                <div className='h-full w-1/5 flex flex-col'>
                                                                    <div className='w-full h-1/3 flex justify-center items-end '>
                                                                        <p className='text-[#218d65] text-xs font-extrabold'>{flight.company}</p>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-center items-center'>
                                                                        <IoIosAirplane className='text-[25px] text-[#3a038c]' />
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-center items-start '>
                                                                        <p className='text-[#6d6d6d] text-sm font-bold '>{flight.flightHour} ({flight.stop})</p>
                                                                    </div>
                                                                </div>

                                                                <div className='h-full w-1/5 flex justify-center items-center'>
                                                                    <p className='text-[#6d6d6d] text-xs font-extrabold'>____________</p>
                                                                </div>

                                                                <div className='h-full w-1/5 flex flex-col py-2 pl-10'>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <div className='flex items-end justify-start '>
                                                                            <PiAirplaneLandingBold className='text-base text-[#6d6d6d]' />
                                                                            <p className='text-[#6d6d6d] text-sm font-semibold ml-1'>Arrival</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <p className='font-bold text-base text-[#303030]'>{flight.arrivalHour}</p>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-start '>
                                                                        <p className='text-[#6d6d6d] text-sm font-bold '>Airport: {flight.arrivalAirportCode}</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='w-full h-[30%] flex '>
                                                                <div className='h-full w-1/2 flex flex-col '>
                                                                    <div className='h-1/2 w-2/5 flex items-start'>
                                                                        <p className='text-[#4a0096] font-bold text-lg'>Price: ${flight.cost}</p>
                                                                    </div>
                                                                    <div className='h-1/2 w-2/5 flex items-start '>
                                                                        <p className='text-[#6d6d6d] text-xs font-bold'>Round Trip</p>
                                                                    </div>
                                                                </div>
                                                                <div className='h-full w-1/2 flex justify-end'>
                                                                    <div className='h-full w-2/4 bg-[#4a0096] hover:bg-[#6500cb] rounded-tl-lg rounded-br-lg flex items-center justify-center cursor-pointer'>
                                                                        <Link to={`/details/${flight._id}`} className='text-[#f1ebf6] font-semibold text-[15px]'>Book Flight</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-full h-[20%] flex justify-start'>
                                                            <div className='h-full w-1/5 flex justify-center items-center bg-[#e6e0eb] hover:bg-[#e2d5ee] rounded-bl-lg rounded-br-lg'>
                                                                <Link to={`/details/${flight._id}`} className='font-semibold text-sm text-[#7843af] hover:text-[#8643ce] cursor-pointer underline underline-offset-1'>Check the details</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    )
                                }         

                                
                                <FlightFilter 
                                    // onCompanyChange={} 
                                    // onStopChange={}    
                                />
                                
                            </div>
                        </div>
                    </div>


                    {/* Right Div */}
                    <div className='h-full w-[22%] flex flex-col justify-between'>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner brightness-95 absolute h-full w-full object-cover rounded-lg transition duration-200 group-hover:brightness-75' src="https://plus.unsplash.com/premium_photo-1664391649456-ed7f85b7d96d?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 transition duration-200  '>
                                <IoCarOutline className='h-[27px] w-[27px] text-[#fafaf9]  ' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>CAR RENTALS</p>
                            </div>

                        </div>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group '>
                            <img className='shadow-inner brightness-95 absolute h-full w-full object-cover rounded-lg transition duration-200 group-hover:brightness-75' src="https://images.unsplash.com/photo-1602236500744-955c6ffc275b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVscyUyMGJsdWV8ZW58MHx8MHx8fDA%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 transition duration-200  '>
                                <LiaHotelSolid className='h-[27px] w-[27px] text-[#fafaf9] ' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>HOTELS</p>
                            </div>

                        </div>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner  absolute h-full w-full object-cover rounded-lg transition duration-200 group-hover:brightness-75' src="https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 transition duration-200 '>
                                <GiPalmTree className='h-[27px] w-[27px] text-[#fafaf9] ' />
                                <p className='text-[#fafaf9] text-lg font-semibold '>TRAVEL PACKAGES</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home