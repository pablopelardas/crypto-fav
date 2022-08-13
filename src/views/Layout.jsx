import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <main className='min-h-screen bg-amber-100'>
      <Navbar />
      {children}
      {/* TODO: footer */}
    </main>
  )
}

export default Layout