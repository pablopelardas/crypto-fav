import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <main className='min-h-screen bg-amber-100'>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout