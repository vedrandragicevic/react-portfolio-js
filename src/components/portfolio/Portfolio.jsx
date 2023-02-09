import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Crypto Currency Visualization',
      github: 'https://github.com',
      demo: 'https://www.wikipedia.org/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Crypto Currency Visualization',
      github: 'https://github.com',
      demo: 'https://www.wikipedia.org/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Crypto Currency Visualization',
      github: 'https://github.com',
      demo: 'https://www.wikipedia.org/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Crypto Currency Visualization',
      github: 'https://github.com',
      demo: 'https://www.wikipedia.org/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Crypto Currency Visualization',
      github: 'https://github.com',
      demo: 'https://www.wikipedia.org/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Crypto Currency Visualization',
      github: 'https://github.com',
      demo: 'https://www.wikipedia.org/'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {data.map( data => (
          <article className='portfolio__item' key={data.id}>
            <div className="portfolio__item-image"> <img src={data.image} alt="" /> </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href={data.github} className='btn' target='_blank'>GitHub</a>
              <a href={data.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>     
          </article>
            )
          )
        }

      </div>

    </section>
  )
}

export default Portfolio