import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom';


const Navbar = () => {
    
    const[nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    
    }

    const handleNavv = () => {
        setNav(nav)
    
    }

  return (
    <div className='flex justify-between items-center h-24 max-w -[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-white m-4'>Emmanuel Ifeanyi</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                   <Link to='/' onClick={handleNavv}>Home</Link>
                </li>
                <li className='p-4'>
                    <Link to='/About' onClick={handleNavv}>About</Link>
                </li>
                <li className='p-4'>
                    <Link to='/Projects' onClick={handleNavv}>Projects</Link>
                </li>
                <li className='p-4'>
                    <Link to='/Contact' onClick={handleNavv}>Contact</Link>
                </li>
                
            </ul>
        <div onClick={handleNav} className='block md:hidden hover:cursor-pointer'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-orange-400 m-4'>Emmanuel</h1>
                <ul className='pt-12 uppercase p-4'>
                    <li className='p-4 border-b border-gray-100' onClick={handleNav}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-100' onClick={handleNav}>
                    <Link to='/About'>About</Link>
                    </li>
                    <li className='p-4 border-b border-gray-100' onClick={handleNav}>
                        <Link to='/Projects'>Projects</Link>
                    </li>
                    <li className='p-4 border-b border-gray-100' onClick={handleNav}>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    
                </ul>
        </div>
    </div>
  )
}

export default Navbar