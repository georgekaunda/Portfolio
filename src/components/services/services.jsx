import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>IT Support</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Operating system installations.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Microsoft office installations and activation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Monitoring and maintaining computer systems and networks.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Installing and configuring computer hardware, software, systems and networks.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Virus installations and upgrades.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Upgrade systems to enable compatible software.</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write code in more than one programming language.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Plan and prototype new applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fix bugs in existing projects.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build and maintain databases.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Carry out code refactoring and optimisation of existing code.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Document code, so other developers can understand and contribute to it.</p>
            </li>
          </ul>
        </article>
        {/*Web Development*/}

        <article className='service'>
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create images and designs through 3D modelling, photography and image modelling.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop graphical user interfaces.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop illustrations, logos and other designs.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test graphics across various media.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use the appropriate colors and layouts for each graphic.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of design techniques,tools and principles.</p>
            </li>
          </ul>
        </article>
        {/*End of Graphics Design*/}
      </div>
    </section>
  )
}

export default Services