import React from 'react'
import './ExperienceContainer.css'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer_info'>
            <Experience number="2" title="Clients" />
            <Experience number="8" title="Projects" style={{backgroundColor:"#f64c08"}} />
            <Experience number="1 yr" title="Html Css Js" />
        </div>
    </Element>
  )
}

export default ExperienceContainer