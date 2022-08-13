import React from 'react'

const Modal = ({handleClose, show, children}) => {
  return (
    <section className={` ${show ? 'flex' : 'hidden'} bg-[#0000009c] w-screen h-[100vh] z-20 absolute top-0 justify-center items-center`}>
      <div className='w-[95%] bg-amber-100 border-amber-500 border-[3px] relative sm:w-9/12 xl:w-6/12'>
        {children}
        <button className='absolute top-2 right-2 text-amber-900 font-black text-2xl' onClick={handleClose}>X</button>
      </div>
    </section>
  )
}

export default Modal