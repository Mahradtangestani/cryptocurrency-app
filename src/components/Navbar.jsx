import React from 'react';
import Logo from "../assets/logo2.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='flex justify-center items-center w-full bg-none'>
                <img src={Logo} className='w-[200px] h-32 rounded-full border-gray-700 border-2' alt="" />
            </div>
        </Link>
    );
}

export default Navbar;
