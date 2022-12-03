import React from 'react'
import {
   
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaMailBulk,
    FaMailchimp,
    FaTwitterSquare,
    
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full py-16 text-black px-4 bg-white'>
        <div className='flex justify-between md:w-[50%] my-56 mx-auto'>
               <a className='' href='https://facebook.com/profile.php?id=100007307389295'><FaFacebookSquare color='#3b5998' size={80}  /></a> 
                <a className='' href='https://www.linkedIn.com/in/ifeanyi-ezeanata-219129172'><FaLinkedin color='#0072b1' size={80} /></a>
                <a className='' href='mailto:ezeanataifeanyi@gmail.com?subject=subject-text'><FaMailBulk size={80} /></a>
            </div>
    </div>
  )
}

export default Contact