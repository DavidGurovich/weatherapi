import React from 'react'

function TimeLocation({time, weather}) {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className=' text-white text-xl font-extralight'>
            {new Date().toLocaleString()}
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
               {weather.name}
            </p>
        </div>
    </div>
  )
}

export default TimeLocation