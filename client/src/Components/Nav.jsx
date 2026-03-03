import React from 'react'
import { Contact2Icon, HomeIcon, IdCard, User2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const navLinks = [
        {
            name:"Home",
            icon: <HomeIcon/>,
            path: "/"
        } ,
        {
            name:"About",
            icon: <User2/>,
            path: "/"
        }   ,
        {
            name:"Resume",
            icon: <IdCard/>,
            path: "/"
        }   ,
        {
            name:"Contact-me",
            icon: <Contact2Icon/>,
            path: "/"
        }   
    ]
  return (
    <div className='flex justify-between font-bold px-3 py-2 bg-gray-700'>
        <h1>samo</h1>
        <div className='flex space-x-4'>
            {
                navLinks.map((link)=>(
                    <NavLink to={link.path} className='flex gap-4'>
                        <span>{link.icon}</span>
                        {link.name}
                    </NavLink>
                ))
            }
        </div>
        
    </div>
  )
}

export default Nav