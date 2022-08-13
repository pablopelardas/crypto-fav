import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center h-24 bg-amber-900'>
      <p className='text-amber-300 text-7xl font-bold'>CryptoFav</p>
      <button className='absolute left-6 top-8 bg-amber-300'> {'<--'} </button>
    </nav>
  )
}

export default Navbar