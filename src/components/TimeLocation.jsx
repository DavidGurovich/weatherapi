import React from 'react'
function getCurrentDate() {
  const t = new Date();
  const date = ('0' + t.getDate()).slice(-2);
  const month = ('0' + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  return `${month}/${date}/${year}`;
}
function TimeLocation({time, weather}) {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className=' text-white text-xl font-extralight'>
            {getCurrentDate()}
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