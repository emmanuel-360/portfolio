import React from 'react'
import Laptop from '../assets/laptop.jpg'
import todolist from '../assets/todolist.png'
import umbrella from '../assets/umbrella.png'

const Projects = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      
      <h2 className='mx-auto font-bold text-4xl mt-[-5rem] mb-9 text-w pt-5'>PROJECTS</h2>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          
            <div className='flex flex-col justify-center'>
                
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Weather Display</h1>
                <p>A website that utilizes the openweathermap API in order to get the current 
                    weather information of different locations around the world.
                </p>
            <div>
                <a className='w-[200px] mx-auto lg:mr-5 md:mr-5 md:mx-auto mr-5' href='https://weatherapp360.netlify.app/'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-[#2f9aea] lg:mx-auto md:mx-auto'>Live Preview</button></a>
                <a className='w-[200px] mx-auto lg:mx-auto md:mx-auto' href='https://github.com/emmanuel-360/weather-app'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-orange-400 lg:mx-auto md:mx-auto' 
      >View source code</button></a>
            </div>
            </div>
            <img className='w-[500px] mx-auto my-4' size={10} src={umbrella} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          
            <div className='flex flex-col justify-center'>
               
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Todo-List App</h1>
                <p>This web application can help its users keep track of their daily activities.
                </p>

                <div>
                <a className='w-[200px] mx-auto lg:mr-5 md:mr-5 md:mx-auto mr-5' href='https://todolist360.netlify.app/'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-[#2f9aea] lg:mx-auto md:mx-auto'>Live Preview</button></a>
                <a className='w-[200px] mx-auto lg:mx-auto md:mx-auto' href='https://github.com/emmanuel-360/todo-list'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-orange-400 lg:mx-auto md:mx-auto' 
                title="ezeanataifeanyi@gmail.com">View source code</button></a>
            </div>
            </div>
            <img className='w-[300px] mx-auto my-4 lg:pt-10 xl:pt-10' src={todolist} alt="/" />
            <a className='mx-auto lg:mx-auto' href='https://github.com/emmanuel-360?tab=repositories'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-[#2f9aea] lg:mx-auto md:mx-auto'>See more projects</button></a>
        </div>
    </div>
  )
}

export default Projects