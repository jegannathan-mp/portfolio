import React from 'react'
import { Element } from 'react-scroll'
import skilling from '../../assets/skills.jpg'
import { LinearProgress } from '@mui/material'
import './SkillContainer.css'

const SkillContainer = () => {
  return (
    <Element className='skillcontainer' id='skills' >
        <div className='skillcontainer_image'>
            <img src={skilling} alt="skillContainer" />
        </div>
        <div className='skillcontainer_text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer_skillset'>
                <h5>HTML</h5>
                <div className='skillcontainer_slider skillcontainer_slider1'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h5>CSS</h5>
                <div className='skillcontainer_slider skillcontainer_slider2'>
                    <LinearProgress variant="determinate" value={80} />
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h5>JavaScript</h5>
                <div className='skillcontainer_slider skillcontainer_slider3'>
                    <LinearProgress variant="determinate" value={70} />
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h5>ReactJs</h5>
                <div className='skillcontainer_slider skillcontainer_slider4'>
                    <LinearProgress variant="determinate" value={75} />
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h5>NodeJs</h5>
                <div className='skillcontainer_slider skillcontainer_slider5'>
                    <LinearProgress variant="determinate" value={65} />
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h5>JAVA</h5>
                <div className='skillcontainer_slider skillcontainer_slider6'>
                    <LinearProgress variant="determinate" value={80} />
                </div>
            </div>

        </div>
    </Element>
  )
}

export default SkillContainer