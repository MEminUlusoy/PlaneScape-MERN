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

const MyFlights = () => {

    const [myFlights, setMyFlights] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5555/myFlights')
            .then((res) => {
                setMyFlights(res.data.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log("Error fetching my flights:", error);
                setLoading(false)
            });
    }, []);


    return (
        <div className='bg-[#F2F2F2]  h-screen w-screen flex flex-col'>
            {/* Navbar */}
            <div className='w-full h-[10%] flex'>
                <div className=' h-full w-[55%] flex items-center justify-start pl-3'>

                    <div className='h-[33px] w-[33px] rounded-full bg-[#4a0096] border-none'>
                        <a href="/"><IoIosAirplane className='h-full w-[90%] text-[#f5f5f5] cursor-pointer' /></a>
                    </div>
                    <a href="/"><h1 className='text-[#3f3f40] font-bold ml-2 cursor-pointer'>PLANE SCAPE</h1></a>

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
                    <div className='h-full w-[78%]  flex flex-col '>
            
                        
                        {/* Left Bottom */}
                        <div className='w-full h-full pr-10 '>
                            <div className='h-full w-full flex '>
                                {/* Flights section */}
                                {
                                    loading ? (
                                        <Spinner />
                                    ) : (
                                        <div className='h-full w-full  flex flex-col justify-between overflow-auto'>

                                            {/* Flight Div */}
                                            {
                                                myFlights.map((myFlight, index) => (

                                                    <div key={myFlight._id} className='w-full h-[270px] mb-3 flex flex-col '>
                                                        {/* Flight Rounded Card */}
                                                        <div className='w-full h-[80%] bg-[#ffffff]  rounded-xl  flex flex-col pl-6 '>

                                                            <div className='w-full h-[18%]  flex items-end '>
                                                                <p className='text-sm text-[#303030] font-bold '>{myFlight.departureCity} - {myFlight.arrivalCity}</p>
                                                            </div>

                                                            <div className='w-full h-[52%]  flex  '>
                                                                <div className='h-full w-1/5 flex flex-col py-2'>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <div className='flex items-end justify-start '>
                                                                            <PiAirplaneTakeoffBold className=' text-base text-[#6d6d6d] ' />
                                                                            <p className='text-[#6d6d6d] text-sm font-semibold ml-1'>Departure</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <p className='font-bold text-base text-[#303030] '>{myFlight.departureHour}</p>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-start '>
                                                                        <p className='text-[#6d6d6d] text-sm font-bold  '>Airport: {myFlight.departureAirportCode}</p>
                                                                    </div>
                                                                </div>

                                                                <div className='h-full w-1/5  flex justify-start items-center'>
                                                                    <p className='text-[#6d6d6d] text-xs font-extrabold'>____</p>
                                                                </div>

                                                                <div className='h-full w-1/5 flex flex-col'>
                                                                    <div className='w-full h-1/3 flex justify-center items-end '>
                                                                        <p className='text-[#218d65] text-xs font-extrabold'>{myFlight.company}</p>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-center items-center'>
                                                                        <IoIosAirplane className='text-[25px] text-[#3a038c] ' />
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-center items-start '>
                                                                        <p className='text-[#6d6d6d] text-sm font-bold  '>{myFlight.flightHour} ({myFlight.stop})</p>
                                                                    </div>
                                                                </div>

                                                                <div className='h-full w-1/5 flex justify-center items-center'>
                                                                    <p className='text-[#6d6d6d] text-xs font-extrabold'>____</p>
                                                                </div>


                                                                <div className='h-full w-1/5  flex flex-col py-2 pl-10'>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <div className='flex items-end justify-start '>
                                                                            <PiAirplaneLandingBold className=' text-base text-[#6d6d6d] ' />
                                                                            <p className='text-[#6d6d6d] text-sm font-semibold ml-1'>Arrival</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-end '>
                                                                        <p className='font-bold text-base text-[#303030] '>{myFlight.arrivalHour}</p>
                                                                    </div>
                                                                    <div className='w-full h-1/3 flex justify-start items-start '>
                                                                        <p className='text-[#6d6d6d] text-sm font-bold  '>Airport: {myFlight.arrivalAirportCode}</p>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                            <div className='w-full h-[30%]  flex '>
                                                                <div className='h-full w-1/2 flex flex-col '>
                                                                    <div className='h-1/2 w-2/5 flex items-start'>
                                                                        <p className='text-[#4a0096] font-bold text-lg'>Price: ${myFlight.cost}</p>
                                                                    </div>
                                                                    <div className='h-1/2 w-2/5 flex items-start '>
                                                                        <p className='text-[#6d6d6d] text-xs font-bold'>Round Trip</p>
                                                                    </div>
                                                                </div>
                                                                <div className=' h-full w-1/2 flex justify-end'>
                                                                    <div className='h-full w-2/4 bg-[#4a0096]  rounded-tl-lg rounded-br-lg flex items-center justify-center cursor-pointer'>
                                                                        <p className='text-[#f1ebf6] font-semibold text-[15px]'>Date: {new Date(myFlight.date).toLocaleDateString()}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                ))
                                            }


                                        </div>

                                    )
                                }

                            </div>
                        </div>
                    </div>


                    {/* Right Div */}
                    <div className='h-full w-[22%] flex flex-col justify-between'>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group '>
                            <img className='shadow-inner brightness-95 absolute h-full w-full object-cover rounded-lg transition duration-200 group-hover:brightness-75' src="https://plus.unsplash.com/premium_photo-1664391649456-ed7f85b7d96d?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 '>
                                <IoCarOutline className='h-[27px] w-[27px] text-[#fafaf9]  transition duration-200' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>CAR RENTALS</p>
                            </div>

                        </div>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner brightness-95 absolute h-full w-full object-cover rounded-lg transition duration-200 group-hover:brightness-75' src="https://images.unsplash.com/photo-1602236500744-955c6ffc275b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVscyUyMGJsdWV8ZW58MHx8MHx8fDA%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 '>
                                <LiaHotelSolid className='h-[27px] w-[27px] text-[#fafaf9] transition duration-200' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>HOTELS</p>
                            </div>

                        </div>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner brightness-60 absolute h-full w-full object-cover rounded-lg transition duration-200 group-hover:brightness-75' src="https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 transition duration-200'>
                                <GiPalmTree className='h-[27px] w-[27px] text-[#fafaf9] ' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>TRAVEL PACKAGES</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyFlights