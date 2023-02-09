import { React, useState} from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';
import { MdContactMail } from 'react-icons/md';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');


  return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsBook /></a>
        <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><MdMiscellaneousServices /></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdContactMail /></a>
    </nav>
  )
}

export default Nav