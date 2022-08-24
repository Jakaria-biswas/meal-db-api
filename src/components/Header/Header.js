import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-section'>
             <nav>
                  <NavLink to="/" className="link">Foods</NavLink>
                  <NavLink to="/find" className="link">find food</NavLink>
             </nav>
        </div>
    );
};

export default Header;