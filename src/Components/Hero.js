import Laptop from '../assets/laptop.jpg'
import profileboy from '../assets/profileboy.png'
import mansitting from '../assets/mansitting.png'
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            
            <div className='flex flex-col justify-center px-3'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Hi, I'm Emmanuel Ifeanyi</h1>
                <p className='text-black'> A diligent front-end developer, who is passionate
                about building businesses with the right designs and solutions.
                </p>
                <div className='flex flex-row'>
                <Link to='/About'><button className='mr-3px text-[white] lg:w-[200px] lg:h-[50px] md:w-[200px] md:h-[50px] xl:w-[200px] xl:h-[50px]  rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-[#2f9aea] lg:mx-auto md:mr-5 sm:mr-3'>About</button> </Link>
                <a className='w-[200px] mx-auto lg:mx-auto md:mx-auto ml-[7px]' href='mailto:ezeanataifeanyi@gmail.com?subject=subject-text'><button className='text-[white] lg:w-[200px] lg:h-[50px] md:w-[200px] md:h-[50px] xl:w-[200px] xl:h-[50px]  rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-orange-400 lg:mx-auto md:mr-5' title="ezeanataifeanyi@gmail.com">Send an email</button></a>
                </div>
              {/* <Link to='ezeanataifeanyi@gmail.com'> <button className='text-[white] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300 bg-blue-500 lg:mx-auto md:mx-auto'>Hire me</button></Link> */}
            </div>
            <img className='w-[300px] mx-auto my-4 pr-5' src={mansitting} alt="/" />
        </div>
    </div>
  )
}
export default Hero