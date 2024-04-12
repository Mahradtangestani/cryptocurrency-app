import React from 'react';
import Logo from "../assets/coincheck-logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='flex justify-center items-center w-full'>
                <img src={Logo} className='w-[200px] h-32 rounded-full border-blue-950 border-2' alt="" />
            </div>
        </Link>
    );
}

export default Navbar;
