import React from 'react';
import CV from '../../assets/cv.pdf';
import './header.css';


const CTA = () => {
  return (
    <div className='cta'>
<a href={CV} download className='btn text__header'>Download CV</a>
<a href='#contact' className='btn text__header'>Contact Me</a>
    </div>
  )
}

export default CTA;
