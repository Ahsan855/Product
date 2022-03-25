import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-section">
            <h1>AHSAN</h1>
         <div className='link-menu'>
            <a href="/Home">Home</a>
            <a href="/About">About Us</a>
            <a href="/Shop">Shop</a>
            <a href="/Order">Orders</a>
            <a href="/logIn">LogIn</a>
         </div> 
        </div>
        
    );
};

export default Header;