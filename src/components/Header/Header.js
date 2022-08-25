import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-section'>
             <nav>
                  <NavLink to="/" activeclassname="active" className="link" >Foods</NavLink>
                  <NavLink to="/find"  activeclassname="active"  className="link" >find food</NavLink>
             </nav>
        </div>
    );
};

export default Header;