import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
        <div className='header container header__container'>
        <h5>Greetings I'm</h5> 
        <h1>Vedran Dragicevic</h1>
        <h5 className='text__header'>Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
            <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
     </div>   
     </header>
  )
}

export default Header