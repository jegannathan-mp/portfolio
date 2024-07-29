import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent'>

        <div className='topContent_container'>
            <h1>Mr.Jegan Nathan M P</h1>
            <p>A professional Web and App Developer</p>
            <a href="https://drive.google.com/file/d/1tjg8KpC98W8uKpRvaBJzcmh37at0DG4U/view?usp=drivesdk" target='_blank' rel="noopener noreferrer" >
                <button className='topContent_downloadButton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500} >
                <button className='topContent_workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent