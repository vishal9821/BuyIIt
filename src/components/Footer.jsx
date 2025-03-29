import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='flex justify-center items-center px-5 py-2 bg-amber-500 text-white
        font-Montserrat font-bold capitalize'>
            <h2>&copy; all rights reserved {date}</h2>
        </div>
    );
};

export default Footer;
