import React from 'react'
import {
   
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaTwitterSquare,
    
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-white'>Emmanuel Ifeanyi</h1>
            <p className='py-4'>Let's start building.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
               <a href='https://facebook.com/profile.php?id=100007307389295'><FaFacebookSquare size={30}  /></a> 
                <a href='https://github.com/emmanuel-360'><FaGithubSquare size={30} /></a>
                <a href='https://www.linkedIn.com/in/ifeanyi-ezeanata-219129172'><FaLinkedin size={30} /></a>
                
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Pages</h6>
                <ul>
                    <li className='py-2 text-sm'>Home</li>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Projects</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Skills</h6>
                <ul>
                    <li className='py-2 text-sm'>HTML</li>
                    <li className='py-2 text-sm'>React</li>
                    <li className='py-2 text-sm'>Javascript</li>
                    <li className='py-2 text-sm'>Illustrator</li>
                    <li className='py-2 text-sm'>CSS</li>
                    <li className='py-2 text-sm'>Tailwind</li>
                </ul>
            </div>   
            <div>
                <h6 className='font-medium text-gray-400'>Projects</h6>
                <ul>
                    <li className='py-2 text-sm'>Weather API</li>
                    <li className='py-2 text-sm'>Music Player</li>
                    <li className='py-2 text-sm'>To-do List App</li>
                    
                </ul>
            </div>
                      
        </div>
    </div>
  )
}

export default Footer