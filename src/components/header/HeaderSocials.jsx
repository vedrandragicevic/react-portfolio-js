import React from 'react';
import './header.css';
import { BsLinkedin } from 'react-icons/bs';
import { ImGithub  } from 'react-icons/im';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vedran-dragi%C4%8Devi%C4%87-742821198/" target="_blank"><BsLinkedin  /></a>
        <a href="https://github.com/vedrandragicevic?tab=repositories" target="_blank"><ImGithub /></a>
        
    </div>
  )
}

export default HeaderSocials;