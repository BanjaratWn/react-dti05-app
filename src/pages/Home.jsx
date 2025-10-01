import React from 'react'
import NavBar from './../components/Navbar'
import profile from './../assets/profile.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import img1 from './../assets/img1.png'
import img2 from './../assets/img2.png'
import img3 from './../assets/img3.png'
import img4 from './../assets/img4.png'
import img5 from './../assets/img5.png'
import img6 from './../assets/img6.png'
import img7 from './../assets/img7.png'
import img8 from './../assets/img8.png'
import img9 from './../assets/img9.png'

export default function Home() {
    const hc = {color: "yellow"}
  return (
    <>
        <NavBar hc={hc} />
        <div className='flex items-center justify-center mr-20 mt-20'>
            {/* Left side */}
            <div className='text-white'>
                <h1 style={{fontFamily: 'Lora'}} className='text-3xl font-bold'>Frontend Web</h1>
                <h1 style={{fontFamily: 'Lora'}} className='text-3xl font-bold'>Developer</h1>
                <br />
                Hi, I'm Yuu. A passionate  front-end
                <br />
                <span>
                    Web Developer base in Thailand.
                </span>
                
                <div className='flex mt-5'>
                <FaLinkedinIn className='mr-2 text-4xl bg-white text-black p-2 rounded-4xl' />
                <FaGithub className='ml-2 text-4xl' />
                </div>
            </div>

            {/* Right side */}
            <div className='ml-20'>
                <img className='w-50' src={profile} alt="profile" />
            </div>
        </div>

            <div className='flex item-center justify-center mt-20'>
                <h1 className='text-white '>My Tech Stack</h1>
            </div>

            <div className='flex item-center justify-center mt-20'>
                <img className='w-8 mx-4' src={img1} alt="figma" />
                <img className='w-8 mx-4' src={img2} alt="java" />
                <img className='w-8 mx-4' src={img3} alt="firebase" />
                <img className='w-8 mx-4' src={img4} alt="js" />
                <img className='w-8 mx-4' src={img5} alt="springboot" />
                <img className='w-8 mx-4' src={img6} alt="css" />
                <img className='w-8 mx-4' src={img7} alt="html" />
                <img className='w-10 mx-2' src={img8} alt="node" />
                <img className='w-8 mx-2' src={img9} alt="react" />
            </div>
        
    </>
  )
}
