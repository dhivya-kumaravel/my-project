import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const handleMenuToggler=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
    {path: "/", title: "Search"},
    {path: "/my-job", title: "My Jobs"},
    {path: "/salary", title: "Salary estimate"},
    {path: "/post-job", title: "Post Job here"},
    ]
    
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6 flex-wrap'>
            
                <div className='flex items-center gap-2'><img className='w-8 h-8 pl-2' src="./images/employee.png" alt="logo" />
                <a className = "text-red-500 font-bold italic" href="/">Job Portal</a></div>
                <div className='flex flex-wrap'>
                  
                  <ul className='md:flex gap-12'>{
                    navItems.map(({path, title}) => (<li key={path}>
                        <NavLink
                    to={path}
                    className={({ isActive}) =>
                      isActive ? "active" : ""
                    }
                  > {title}
                  </NavLink>
                    </li>))
                    }</ul></div>
                    <div className='text-base text-primary font-medium space-x-5 lg:black'>
                        <Link className="py-2 px-5 border rounded" to = "/login">Login</Link>
                        <Link className="py-2 px-5 border rounded bg-blue-600 text-white" to = "/sign-up">SignUp</Link>
                    </div>
                    <div>
                        <button className='hidden' onClick={handleMenuToggler}>
                            
                            {
                                isMenuOpen ? <FaXmark className ='w-5 h-5 text-primary'/> : <FaBars className='text-primary'/>
                            }
                        </button>
                    </div>
                </nav>
        <div className={'hidden px-4 bg-black py-5 rounded-sm $ {isMenuOpen ? "" : "hidden"}'}>
            <ul>{
                    navItems.map(({path, title}) => (<li key={path} className='text-base text-white'>
                        <NavLink
                    to={path}
                    className={({ isActive}) =>
                      isActive ? "active" : ""
                    }
                  > {title}
                  </NavLink>
                    </li>))
                    }</ul>
        </div>
    </header>
  )
}

export default Navbar