import React from 'react'

import { IoIosAirplane } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { HiUserCircle } from "react-icons/hi";
import { IoCarOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { GiPalmTree } from "react-icons/gi";
import { IoIosPaperPlane } from "react-icons/io";

import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSnackbar} from 'notistack';


const FlightDetails = () => {

    const [flight, setFlight] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar()


    

    useEffect(()=>{
        
        axios.get(`http://localhost:5555/flights/${id}`)
            .then((res)=>{
                console.log("API Response Data:", res.data);
                setFlight(res.data.flight)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false)
            })
    },[])

    const handleBuyTicket = () => {
        const newFlight = {
            flightId: flight._id,
            company: flight.company,
            departureCity: flight.departureCity,
            departureCountry: flight.departureCountry,
            departureAirport: flight.departureAirport,
            departureAirportCode: flight.departureAirportCode,
            departureHour: flight.departureHour,
            arrivalCity: flight.arrivalCity,
            arrivalCountry: flight.arrivalCountry,
            arrivalAirport: flight.arrivalAirport,
            arrivalAirportCode: flight.arrivalAirportCode,
            arrivalHour: flight.arrivalHour,
            stop: flight.stop,
            cost: flight.cost,
            date: flight.date
        };

        axios.post('http://localhost:5555/myFlights', newFlight)
            .then((response) => {
                console.log("Flight purchased:", response.data.data);
                enqueueSnackbar("Ticket Is Buyed Successfully", {variant: "success"}) 
                navigate('/myFlights')// Satın alma işlemi sonrası MyFlights sayfasına yönlendirir.
            })
            .catch((error) => {
                console.log("Error purchasing flight:", error);
            });
    };

    
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
                        {/* Left */}
                        <div className='w-full h-3/5 pr-10  '>

                            {
                                loading ? (
                                    <Spinner/>
                                ) : (
                                        
                                        <div className='h-full w-full rounded-xl bg-[#ffffff] flex flex-col'>
                                            <div className=' w-full h-[27%] flex '>
                                                <div className=' h-full w-1/3 flex flex-col items-end  '>
                                                    <div className='w-3/5 h-[45%] flex justify-center items-end'>
                                                        <p className='text-[#6d6d6d] text-base font-extrabold'>FROM</p>
                                                    </div>
                                                    <div className='w-3/5 h-[55%] flex justify-center items-start  '>
                                                        <h3 className='font-bold text-4xl text-[#303030]'>{flight && flight.departureCity}</h3>
                                                    </div>
                                                    
                                                </div>
                                                <div className=' h-full w-1/3'>
                                                    <div className=' w-full h-1/3 flex items-end justify-center '>
                                                        <p className='text-[#218d65] text-lg font-extrabold'>{flight.company}</p>
                                                    </div>
                                                    <div className=' w-full h-1/3 flex'>
                                                        <div className='-full w-1/3 flex items-center justify-center pb-3 '>
                                                            <p className='text-[#6d6d6d] text-base font-extrabold'>____</p>
                                                        </div>
                                                        <div className=' h-full w-1/3 flex items-center justify-center '>
                                                            <IoIosAirplane className='text-[30px] text-[#3a038c] ' />
                                                        </div>
                                                        <div className='h-full w-1/3 flex items-center justify-center pb-3 '>
                                                            <p className='text-[#6d6d6d] text-base font-extrabold'>____</p>
                                                        </div>
                                                    </div>
                                                    <div className=' w-full h-1/3 flex items-start justify-center '>
                                                        <p className='text-[#218d65] text-base font-extrabold'>{new Date(flight.date).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                                <div className=' h-full w-1/3 flex flex-col items-start pl-5'>
                                                    <div className='w-3/5 h-[45%] flex justify-center items-end  '>
                                                        <p className='text-[#6d6d6d] text-base font-extrabold'>TO</p>
                                                    </div>
                                                    <div className='w-3/5 h-[55%] flex justify-center items-start  '>
                                                        <h3 className='font-bold text-4xl text-[#303030]'>{flight.arrivalCity}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' w-full h-[53%] py-2 flex '>
                                                <div className='h-full w-1/2 border-r border-[#6d6d6d]  pl-8 pr-2 flex flex-col'>
                                                    <div className='border-b border-[#6d6d6d] flex items-center justify-between w-full h-1/5'>
                                                        <p className=' text-[#303030] text-sm font-semibold'>Country:</p>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.departureCountry}</p>
                                                    </div>
                                                    <div className='border-b border-[#6d6d6d]  flex items-center justify-between w-full h-1/5'>
                                                        <p className=' text-[#303030] text-sm font-semibold'>City:</p>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.departureCity}</p>
                                                    </div>
                                                    <div className='border-b border-[#6d6d6d]  flex items-center justify-between w-full h-1/5'>
                                                        <p className=' text-[#303030] text-sm font-semibold'>Airport:</p>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.departureAirport}</p>
                                                    </div>
                                                    <div className='border-b border-[#6d6d6d]  flex items-center justify-between w-full h-1/5'>
                                                        <p className=' text-[#303030] text-sm font-semibold'>Airport Code:</p>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.departureAirportCode}</p>
                                                    </div>
                                                    <div className=' border-b border-[#6d6d6d] flex items-center justify-between w-full h-1/5'>
                                                        <p className=' text-[#303030] text-sm font-semibold'>Departure-Arrival Hour:</p>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.departureHour}</p>
                                                    </div>
                                                </div>
                                                <div className='h-full w-1/2  pr-8 pl-2 flex flex-col'>
                                                    <div className='border-b border-[#6d6d6d] flex items-center justify-end w-full h-1/5'>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.arrivalCountry}</p>
                                                    </div>
                                                    <div className='border-b border-[#6d6d6d]  flex items-center justify-end w-full h-1/5'>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.arrivalCity}</p>
                                                    </div>
                                                    <div className='border-b border-[#6d6d6d]  flex items-center justify-end w-full h-1/5'>      
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.arrivalAirport}</p>
                                                    </div>
                                                    <div className='border-b border-[#6d6d6d]  flex items-center justify-end w-full h-1/5'>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.arrivalAirportCode}</p>
                                                    </div>
                                                    <div className=' border-b border-[#6d6d6d] flex items-center justify-end w-full h-1/5'>
                                                        <p className='text-[#6d6d6d] text-base font-normal'>{flight.arrivalHour}</p>
                                                    </div>
            
                                                </div>
                                            </div>
                                            <div className='w-full h-[20%] flex pt-5 '>
                                                <div className='h-full w-1/2 flex flex-col pl-8 '>
                                                    <div className='h-1/2 w-2/5 flex items-start'>
                                                        <p className='text-[#4a0096] font-bold text-2xl'>Price: ${flight.cost}</p>
                                                    </div>
                                                    <div className='h-1/2 w-2/5 flex items-start '>
                                                        <p className='text-[#6d6d6d] text-sm font-bold'>{flight.stop}</p>
                                                    </div>
                                                </div>
                                                <div className=' h-full w-1/2 flex justify-end '>
                                                    <div className='h-full w-2/5 bg-[#4a0096] hover:bg-[#6500cb] rounded-tl-lg rounded-br-lg flex items-center justify-center cursor-pointer' onClick={handleBuyTicket}>
                                                        <p className='text-[#f1ebf6] font-semibold text-lg'>Buy Ticket</p>
                                                    </div>
                                                </div>
            
                                            </div>
                                        </div>                                        
                                )
                            }


                        </div>
                    </div>


                    {/* Right Div */}
                    <div className='h-full w-[22%] flex flex-col justify-between'>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner brightness-95 absolute h-full w-full object-cover rounded-lg  transition duration-200 group-hover:brightness-75' src="https://plus.unsplash.com/premium_photo-1664391649456-ed7f85b7d96d?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 '>
                                <IoCarOutline className='h-[27px] w-[27px] text-[#fafaf9]  transition duration-200' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>CAR RENTALS</p>
                            </div>

                        </div>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner brightness-95 absolute h-full w-full object-cover rounded-lg  transition duration-200 group-hover:brightness-75' src="https://images.unsplash.com/photo-1602236500744-955c6ffc275b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVscyUyMGJsdWV8ZW58MHx8MHx8fDA%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 '>
                                <LiaHotelSolid className='h-[27px] w-[27px] text-[#fafaf9] transition duration-200' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>HOTELS</p>
                            </div>

                        </div>
                        <div className='w-full h-[30%] rounded-lg relative cursor-pointer group'>
                            <img className='shadow-inner brightness-60 absolute h-full w-full object-cover rounded-lg  transition duration-200 group-hover:brightness-75' src="https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='absolute h-full w-full flex flex-col justify-end pl-4 pb-3 '>
                                <GiPalmTree className='h-[27px] w-[27px] text-[#fafaf9] transition duration-200' />
                                <p className='text-[#fafaf9] text-lg font-semibold'>TRAVEL PACKAGES</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FlightDetails