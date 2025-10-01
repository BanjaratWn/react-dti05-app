import React from 'react'
import NavBar from './../components/Navbar'
import img10 from './../assets/img10.png'

export default function About() {
    const ac = {color: "yellow"}
  return (
    <>
        <NavBar ac={ac} />
        <div className='flex item-center justify-center mt-20'>
            <div className='text-white w-1/4'>
              <h1 style={{fontFamily: 'Lora'}} className='text-5xl font-bold '>About Me</h1>
              <img className='w-60 mt-15' src={img10} alt="img10" />
            </div>

            <div className='w-1/3 text-white'>
              <h1 style={{fontFamily: 'Lora'}} className='text-2xl font-bold'>
                Hi, I'm Yuu. A passionate  Front-end Web Developer base in Thailand.
              </h1>
              <br />
              <span className='text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias earum obcaecati fuga ducimus repellendus ad tempora! Voluptates unde sit voluptas tempora voluptatum vero quia aliquid atque accusantium. Facilis recusandae officia, vero veniam porro enim voluptatem ratione magni, non odio quaerat assumenda consectetur ex et libero nobis laborum harum hic dignissimos impedit! Ut atque in animi, illum doloremque cum sit.
              </span>
            </div>
        </div>

        <div className='flex item-center justify-center mt-20 text-white'>
          <button className='text-xl border-2 rounded-full px-6 py-2'>Dowload CV</button>
        </div>
    </>
  )
}
