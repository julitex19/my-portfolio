import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


function Nav() {


    const [openMenu, setOpenMenu] = useState(false);

    const toggleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };



    const closeMenu = () => {
        setOpenMenu(false);

        useEffect(() => {
            if (location.hash) {
                const targetSection = document.querySelector(location.hash);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, [location]);
    };
    return (
        <>
            <div className='bg-primaryColor justify-between px-36 py-5 hidden lg:flex fixed w-full top-0 z-50'>
                <Link to="/intro">
                <span className='text-white font-secondaryFont font-bold text-3xl'>
                    Portfo<span className='text-black'>lio.</span>
                </span>
                </Link>
                <ul className=' gap-6 hidden lg:flex'>
                    <Link to="/intro" onClick={closeMenu}>
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Intro</li>
                    </Link>
                    <Link to="/about" onClick={closeMenu}>
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">About</li>
                    </Link>
                    <Link to="/services" onClick={closeMenu}>
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Services</li>
                    </Link>
                    <Link to="/skills" onClick={closeMenu}>
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Skills</li>
                    </Link>
                    <Link to="/teams" onClick={closeMenu}>
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Teams</li>
                    </Link>
                    <Link to="/contact" onClick={closeMenu}>
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Contact</li>
                    </Link>
                </ul>

            </div>

            <div className='bg-primaryColor flex justify-between items-center px-5 py-4 lg:hidden fixed w-full top-0 z-10'>
                <span className='text-white font-secondaryFont font-bold text-3xl'>
                    Portfo<span className='text-black'>lio.</span>
                </span>

                {openMenu ? (<FaTimes className='text-white text-2xl' onClick={closeMenu} />) : (
                    <FaBars className='text-white text-2xl' onClick={toggleOpenMenu} />)}
            </div>

            <ul
                className={`${openMenu
                    ? 'left-0 transition-all duration-1000 ease-in transform translate-x-0' : '-left-1/2 transition-all duration-1000 ease-out transform -translate-x-1/2 bg-secondaryColor'} fixed top-0 h-[95vh] w-full  bg-secondaryColor text-white p-4 text-center flex flex-col gap-10 text-2xl lg:hidden`}>

                <Link to="/intro">
                    <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={closeMenu}>Intro</li>
                </Link>
                <Link to="/about">
                    <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={closeMenu} >About</li>
                </Link>
                <Link to="/services">
                    <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={closeMenu} >Services</li>
                </Link>
                <Link to="/skills">
                    <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={closeMenu} >Skills</li>
                </Link>
                <Link to="/teams">
                    <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={closeMenu} >Teams</li>
                </Link>
                <Link to="/contact">
                    <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={closeMenu} >Contact</li>
                </Link>
            </ul>
        </>
    )
}

export default Nav
