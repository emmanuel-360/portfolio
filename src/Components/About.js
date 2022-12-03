import React from 'react'
import {
   
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaMailBulk,
    FaTwitterSquare,
    FaWhatsapp,
    
} from 'react-icons/fa'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      
        <div className='max-w-[1240px] mx-auto '>
          
            <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-4xl'>About me</h2>
                
                <p>My name is Ezeanata Ifeanyi Emmanuel, and I'm a front-end engineer. I have a good taste for
                    creative color combinations and using the right shapes in order to give app or site users 
                    the best experience possible. I am a good team player and also willing to learn about new technologies 
                    and methods. So far, I have worked with a good number of design tools and frameworks like 
                    React, SASS, Tailwind, Adobe Illustrator, Photoshop etc. I like building new things that would impact people's lives positively, so if 
                    that sounds like the type of project you're building, count me in. I look forward to working 
                    with you.
                </p><br/>
                <p>You can reach me on my social media handles</p>

            <div className='flex justify-between md:w-[20%] my-6'>
               <a href='https://facebook.com/profile.php?id=100007307389295'><FaFacebookSquare size={30}  /></a> 
                <a href='https://github.com/emmanuel-360'><FaGithubSquare size={30} /></a>
                <a href='https://www.linkedIn.com/in/ifeanyi-ezeanata-219129172'><FaLinkedin size={30} /></a>
                <a href='https://api.whatsapp.com/send?phone=07089746885'><FaWhatsapp size={30} /></a>
                <a href='mailto:ezeanataifeanyi@gmail.com?subject=subject-text'><FaMailBulk size={30} /></a>
            </div>
            <a className='w-[200px] mx-auto lg:mx-auto md:mx-auto' href='mailto:ezeanataifeanyi@gmail.com?subject=subject-text'><button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-blue-500 lg:mx-auto md:mx-auto'
      title="support@example.com">Hire me</button></a>
            </div>
        </div>
        
    </div>
  )
}

export default About