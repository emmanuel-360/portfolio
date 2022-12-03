import React from 'react'
import html22 from '../assets/html22.png'
import Javascriptlogo from '../assets/Javascriptlogo.png'
import reactlogo from '../assets/reactlogo.png'
import csss2 from '../assets/csss2.png'
import Tailwindlogo2 from '../assets/Tailwindlogo2.png'
import illustrator from '../assets/illustrator.jpg'


const Skills = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#2f9aea] '>
      <h2 className='mx-auto font-bold text-4xl mt-[-5rem] mb-9 text-w'>SKILLS</h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl bg-white flex  p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20  bg-white py-2 ml-4 md:py-5 lg:py-4' src={html22} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8 mx-auto md:text-base lg:text-2xl  lg:mx-auto'>HTML</h2>
        </div>
        <div className='w-full shadow-xl bg-white flex  p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-36  bg-white py-3 size-{20} ml-[-1rem]' src={reactlogo} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8 mx-auto md:text-base lg:text-2xl md:ml-[-1.5rem] lg:mx-auto'>REACT</h2>
        </div>
        <div className='w-full shadow-xl bg-white flex  p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-36  bg-white py-4 size-{20} ml-[-1rem]' src={Javascriptlogo} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8 mx-auto md:text-base lg:text-2xl md:ml-[-1.5rem] lg:mx-auto '>JAVASCRIPT</h2>
        </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
        <div className='w-full shadow-xl bg-white flex  p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
          <img className='w-20  bg-white  size-{3px} py-3 ' src={illustrator} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8 mx-auto md:text-base lg:text-2xl  lg:mx-auto'>ILLUSTRATOR </h2>
        </div>
        <div className='w-full shadow-xl bg-white flex  p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20  bg-white  size-{3px} py-3' src={csss2} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8 mx-auto md:text-base lg:text-2xl lg:mx-auto'>CSS</h2>
        </div>
        <div className='w-full shadow-xl bg-white flex  p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20  bg-white' src={Tailwindlogo2} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8 mx-auto md:text-base lg:text-2xl lg:mx-auto'>Tailwind</h2>
        </div>

        <a className='w-[200px] mx-auto lg:mx-auto md:mx-auto' href='mailto:ezeanataifeanyi@gmail.com?subject=subject-text'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-orange-400 lg:mx-auto md:mx-auto'
      title="support@example.com">Hire me</button></a>
      </div>
    </div>
  )
}

export default Skills