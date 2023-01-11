import React, {useState} from 'react'
import {HiOutlineSearch} from 'react-icons/hi';
import {TbLocation} from 'react-icons/tb';

function Inputs({city, setCity}) {
  

  const searchClick = (e) => {
    setCity({ q: city });

}
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type="text" 
        placeholder='Search for a city..'
        className=' placeholder:lowercase text-xl font-light p-2 shadow-xl focus:outline-none capitalize' 
        onChange={(e) => setCity(e.currentTarget.value)}
        />
        <HiOutlineSearch size = {25} className='text-white cursor-pointer transition ease-out hover:scale-150'
          onClick= {searchClick}/>
        <TbLocation size = {25} className='text-white cursor-pointer transition ease-out hover:scale-150'/>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-110'>
        °C
        </button>
        <p className='mx-2 text-white'>|</p>
        <button name='imperial' className='text-xl font-light text-white cursor-pointer transition ease-out hover:scale-110'>
        °F
        </button>
      </div>
    </div>
  )
}

export default Inputs