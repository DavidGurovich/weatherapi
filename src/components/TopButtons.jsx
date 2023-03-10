import React from 'react'

function TopButtons({setCity}) {
    const cities = [
        {
            id: 1,
            title: 'San Diego'
        },

        {
            id: 2,
            title: 'Las Vegas'
        },

        {
            id: 3,
            title: 'Phoenix'
        },

        {
            id: 4,
            title: 'Seattle'
        },

        {
            id: 5,
            title: 'Portland'
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button 
                key = {city.id} 
                className='text-white text-xl font-medium cursor-pointer transition ease-out hover:scale-110'
                onClick={(e) => setCity(city.title)}
                >
                {city.title}
            </button>
        ))}

    </div>
  )
}

export default TopButtons