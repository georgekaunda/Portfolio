import React from 'react'
import './About.css'
import ME from '../../assets/gk.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <h5>Get to Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
        
          <div className="about__me">
          
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>


          <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small> 
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>
          Hello! My name is George and i enjoy creating things that live on the internet.I like being stretched and working on projects that force me to step outside of my comfort zone and skill set since I believe it's crucial to keep learning new languages and development methodologies.
          
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>


        </div>


      

    </section>
  )
}

export default About