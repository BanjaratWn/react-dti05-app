import React from 'react'
import NavBar from './../components/Navbar'
import img11 from './../assets/img11.png'
import { FaGithub } from 'react-icons/fa';
import img12 from './../assets/img12.png'
import img13 from './../assets/img13.png'
import img14 from './../assets/img14.png'

export default function Portfolio() {
    const pc = {color: "yellow"}
  return (
    <>
        <NavBar pc={pc} />
        <div className='flex items-center justify-center mt-20'>
            <div className='text-white mr-10'>
              <h1 style={{fontFamily: 'Lora'}} className='text-5xl font-bold'>Portfolio</h1>
              <img className='w-100 mt-10' src={img11} alt="Bikes and Beards" />
            </div>
            <div className='text-white ml-10 w-1/3'>
              <h1 style={{fontFamily: 'Lora'}} className='text-2xl text-center'>Bikes and Beards</h1>
              <br />
              <span className='text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia labore corporis sed! Omnis neque sapiente dolorum aliquid quia sunt aperiam ipsa quas laudantium, atque quod quidem. Recusandae a officia quos adipisci praesentium sapiente delectus rerum reiciendis, soluta placeat unde quod laudantium tenetur nemo quidem voluptates cumque quis eos doloribus optio in cum non animi. Voluptatum reprehenderit minus quibusdam ullam reiciendis non ipsa eaque earum?
              </span>
              <br /><br />
              <div className='flex items-center justify-center'>
              <button className='text-xl border-2 rounded-full px-8 py-1'>View</button>
              <FaGithub className='ml-20 mr-2 text-4xl'/> Git code
              </div>
            </div>
        </div>

        <div className='flex items-center justify-center mt-40'>
          <div className='text-white mr-10 w-1/3'>
            <h1 style={{fontFamily: 'Lora'}} className='text-2xl text-center'>Learnify</h1>
            <br />
            <span className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore est eum iure non amet voluptatum cupiditate recusandae tempore eligendi odit delectus atque, rerum quibusdam incidunt eos voluptatibus vel. Dolore error ut illum itaque neque pariatur excepturi cum alias? Cumque quibusdam ut unde, sunt temporibus, et quis sit, libero distinctio est similique aliquam iste ratione minus voluptate sint. Ex hic suscipit maiores officia mollitia! Ratione, excepturi. Accusamus optio mollitia esse culpa?
            </span>
            <br /><br />
            <div className='flex items-center justify-center'>
            <button className='text-xl border-2 rounded-full px-8 py-1'>View</button>
            <FaGithub className='ml-20 mr-2 text-4xl'/> Git code
            </div>
          </div>
          <div className='w-100 ml-10 '>
            <img src={img12} alt="Learnify"/>
          </div>
        </div>
        
        <div className='flex items-center justify-center mt-40'>
          <div>
            <img className='w-100 mr-10' src={img13} alt="Anime-X"/>
          </div>

          <div className='text-white ml-10 w-1/3'>
            <h1 style={{fontFamily: 'Lora'}} className='text-2xl text-center'>Anime-X</h1>
            <br />
            <span className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus nam ducimus suscipit delectus sequi qui ipsam. Tempora, qui corrupti ea quibusdam, libero exercitationem omnis ab dignissimos odit earum delectus aspernatur. Labore consequatur deserunt alias iste, nemo perferendis adipisci explicabo ea blanditiis iusto dolorum reiciendis, amet atque totam officia? Odit itaque nemo ut nesciunt odio quos fugit nisi facere ratione possimus maxime esse iusto beatae, consequuntur architecto eligendi natus? Quidem voluptate natus facilis tenetur reiciendis mollitia quo at. Asperiores, rerum.
            </span>
            <br /><br />
            <div className='flex items-center justify-center'>
            <button className='text-xl border-2 rounded-full px-8 py-1'>View</button>
            <FaGithub className='ml-20 mr-2 text-4xl'/> Git code
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-40 mb-20'>
          <div className='text-white mr-10 w-1/3'>
            <h1 style={{fontFamily: 'Lora'}} className='text-2xl text-center'>Tech-Z</h1>
            <br />
            <span className='text-gray-300'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eveniet ipsa, minima nam ut nisi consectetur ea vitae assumenda consequatur nobis quam eius? Delectus aperiam ipsam soluta saepe, id quod minus, nam animi eum repudiandae sit natus recusandae. Inventore, placeat? Assumenda accusamus debitis architecto possimus sequi error non, culpa incidunt libero esse? Laudantium repudiandae temporibus sed quibusdam cumque excepturi laborum magni accusantium, officiis, quaerat omnis debitis. Reiciendis ipsum et dolorem labore. Quas sint tempore nihil saepe ullam! Ad voluptate sequi blanditiis eveniet enim unde veritatis vitae doloribus, quisquam ipsum consequatur.
            </span>
            <br /><br />
            <div className='flex items-center justify-center'>
            <button className='text-xl border-2 rounded-full px-8 py-1'>View</button>
            <FaGithub className='ml-20 mr-2 text-4xl'/> Git code
            </div>
          </div>
          <div className='w-100 ml-10'>
            <img src={img14} alt="Tech-Z"/>
          </div>
        </div>
    </>
  )
}
