import React from 'react'

const FlightFilter = () => {
    return (
        <div className='h-full w-1/4  pl-9 pt-3 '>
            <div className='h-full w-full  flex flex-col  '>
                {/* Sort By */}
                <div className='w-full h-[15%] flex flex-col'>
                    <div className='w-full h-[40%] '>
                        <p className='text-sm text-[#303030] font-bold '>Sort by:</p>
                    </div>
                    <div className='w-full h-[60%] flex items-center justify-start'>
                        <select className='bg-[#ffffff]  rounded-lg text-[#6d6d6d] text-sm font-medium outline-none ml-1  h-[70%]  w-[80%]' name="category" id="category">
                            <option value="lp">Lowest Price</option>
                            <option value="hp">Highest Price</option>
                            <option value="strUP">Most Get Stars</option>
                            <option value="strDWN">Less Get Stars</option>
                        </select>
                    </div>
                </div>


                {/* Arrival Time */}
                <div className='w-full h-[20%]'>
                    <div className='w-full h-[40%] flex items-center justify-start '>
                        <p className='text-sm text-[#303030] font-bold '>Arrival Time</p>
                    </div>
                    <div className='w-full h-[60%] flex flex-col '>
                        <div className='w-full h-1/2 flex items-center justify-start'>
                            <input type="radio" name="arrival" id="hr1" className='text-[#7843af]' />
                            <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="hr1">05:00 AM - 11:59 AM</label>
                        </div>
                        <div className='w-full h-1/2 flex items-center justify-start'>
                            <input type="radio" name="arrival" id="hr2" className='text-[#7843af]' />
                            <label className='text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="hr2">12:00 PM - 05:59 PM</label>
                        </div>

                    </div>
                </div>

                {/* Stops */}
                <div className='w-full h-[25%] '>
                    <div className='w-full h-[30%] flex items-center justify-start  '>
                        <p className='text-sm text-[#303030] font-bold '>Stops</p>
                    </div>
                    <div className='w-full h-[70%] flex flex-col '>
                        <div className='w-full h-1/3 flex'>

                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input 
                                    type="radio" 
                                    name="stops" 
                                    id="stop0"
                                    value="0"
                                    className='text-[#7843af]' 
                                />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="stop0">Nonstop</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>

                        </div>

                        <div className='w-full h-1/3 flex items-center justify-start'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input 
                                    type="radio" 
                                    name="stops" 
                                    id="stop1"
                                    value="1"
                                    className='text-[#7843af]' 
                                />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="stop1">1 stop</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-1/3 flex items-center justify-start'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input 
                                    type="radio" 
                                    name="stops" 
                                    id="stop2"
                                    value="2"
                                    className='text-[#7843af]' 
                                />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="stop2">2+ stop</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Airlines Included */}
                <div className='w-full h-[40%]'>
                    <div className='w-full h-[20%] flex items-center justify-start  '>
                        <p className='text-sm text-[#303030] font-bold '>Airlines Included</p>
                    </div>
                    <div className='w-full h-[80%] flex flex-col overflow-auto  '>
                        <div className='w-full h-[30px] flex  '>

                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a1" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a1">Alitalia</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>

                        </div>

                        <div className='w-full h-[30px] flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a2" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a2">Lufthansa</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-[30px]  flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a3" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a3">Air France</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-[30px]  flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a4" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a4">Brussels Airlines</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-[30px]  flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a5" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a5">Air Italy</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-[30px]  flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a6" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a6">Siberia</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-[30px]  flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a7" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a7">Air France</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                        <div className='w-full h-[30px]  flex'>
                            <div className='h-full w-3/4 flex items-center justify-start '>
                                <input type="radio" name="airline" id="a8" className='text-[#7843af]' />
                                <label className=' text-[#6d6d6d] text-sm font-sm ml-1' htmlFor="a8">THY</label>
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center '>
                                <p className=' text-[#6d6d6d] text-sm font-sm '>$230</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightFilter