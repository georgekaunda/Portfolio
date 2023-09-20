import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/aaa.jpg'
import IMG2 from '../../assets/no2.jpg'
import IMG3 from '../../assets/react.png'
import IMG4 from '../../assets/p4.jpeg'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p6.jpg'


const data=[
  {
    id: 1,
    image: IMG1,
    title: 'NUST Student Accomodation App (PhP & MySql)',
    //github: 'https://github.com',
    view: 'https://nustaccomodation.000webhostapp.com/house_rent',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Notepad (Reactjs)',
    view: 'https://notesapp04042023.netlify.app',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Dark/Light Mode Toddle App (ReactJs)',
    view: 'https://darklightmodestoreactsite.netlify.app',
    demo: ''
  },
 
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, view, demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-sta">
              <a href={view} className='btn' target='_blank'>View</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
       }

        

        
      </div> 
    </section>
  )
}

export default Portfolio