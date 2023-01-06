import React from 'react'
import {CgArrowUp, CgArrowDown} from 'react-icons/cg';
import {TbTemperature, TbDroplet, TbSun, TbSunrise, TbSunset, TbWind} 
from 'react-icons/tb';

function Temperature() {
  return (
    <div>
       <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p> Cloudy or whatever </p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' 
            />
            <p className='text-5xl'> 65° </p>
            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <TbDroplet size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>70%</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <TbTemperature size={18} className='mr-1'/>
                    Feels like:
                    <span className='font-medium ml-1'>66°</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <TbWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>15 mph</span>
                </div>

            </div>
        </div>

        <div className=' flex flex-row items-center justify-center space-x-1 text-white text-sm py-3'>
          <TbSunrise/>
          <p> Sunrise: <span className='font-medium ml-1'>6:45 AM </span></p>
          <p className='font-light'>|</p>

          <TbSunset/>
          <p> Sunset: <span className='font-medium ml-1'>8:00 PM</span></p>
          <p className='font-light'>|</p>

          <CgArrowUp/>
          <p> High: <span className='font-medium ml-1'>8:00 PM</span></p>
          <p className='font-light'>|</p>

          <CgArrowDown/>
          <p> Low: <span className='font-medium ml-1'>8:00 PM</span></p>
          <p className='font-light'>|</p>
        </div>
    </div>
    
  )
}

export default Temperature