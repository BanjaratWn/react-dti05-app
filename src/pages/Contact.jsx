import React from 'react'
import NavBar from './../components/Navbar'
import img15 from './../assets/img15.png'
import img16 from './../assets/img16.png'
import img17 from './../assets/img17.png'

export default function Contact() {
    const cc = {color: "yellow"}
  return (
    <>
      <NavBar cc={cc} />
      <div className='text-white ml-50 mt-20'>
          <h1 style={{fontFamily: 'Lora'}} className='text-4xl font-bold'>Contact</h1>
      </div>

      <div className='flex items-center justify-center mt-20'>
        <div className='text-center'>
          <h1 style={{fontFamily: 'Lora'}} className='text-white text-3xl font-bold'>Let't Connect</h1>
          <br />
          <span className='text-gray-300 text-xl font-bold'>Don't be a stranger! Say hello and let's collaborate</span>
        </div>
      </div>

      <div className='flex justify-center items-start mt-40 space-x-80 w-full'>
        <div className='flex flex-col items-center text-center'>
          <img className='w-30 mr-8' src={img15} alt="profile-icon"/>
          <span className='text-gray-300'>s6752410019@sau.ac.th</span>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img className='w-30 ml-3 mb-3' src={img16} alt="location" />
          <span className='text-gray-300'>Thailand, Bangkok</span>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img className='w-30 mr-10' src={img17} alt="linkedin" />
          <span className='text-gray-300'>Yuu</span>
        </div>
      </div>

    </>
  )
}
