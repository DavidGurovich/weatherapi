import React, {useRef, useState} from 'react'
import {HiOutlineSearch} from 'react-icons/hi';


function Inputs({city, setCity, units, setUnits}) {
  
  const unitConvert = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }
  const searchClick = (e) => {
    if (city !== "") setCity(inputRef.current.value);
}
  const inputRef = useRef(null);

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type="text" 
        placeholder='Search for a city..'
        className='placeholder:lowercase text-xl font-light p-2 shadow-xl focus:outline-none capitalize' 
        //onChange={(e) => setCity(e.currentTarget.value)}
        ref = {inputRef}
        />
        <HiOutlineSearch size = {25} className='text-white cursor-pointer transition ease-out hover:scale-150'
          onClick= {searchClick}/>
        
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button 
        name='metric' 
        className='text-3xl text-white font-light cursor-pointer transition ease-out hover:scale-110'
        onClick = {unitConvert}
        >
        °C
        </button>
        <p className='mx-2 text-white'>|</p>
        <button 
         name='imperial'
         className='text-3xl font-light text-white cursor-pointer transition ease-out hover:scale-110'
         onClick = {unitConvert}
         >
        °F
        </button>
      </div>
    </div>
  )
}

export default Inputs