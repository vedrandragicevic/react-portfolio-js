import './about.css';
import React from 'react';
import ME from '../../assets/me-about.jpg';
import { BsFillAwardFill } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BsFillAwardFill  className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ World Wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
            <h5>Projects</h5>
            <small>2</small>
            </article>

          </div>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius expedita perspiciatis cupiditate libero placeat aliquam, asperiores nulla ab consequuntur. Tempora officiis cumque vel. Tempora, magnam suscipit cupiditate perspiciatis aut dolor?</p>
<a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>
      </section>
  )
}

export default About;