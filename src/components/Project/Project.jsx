import React, { useState } from 'react'
import './Project.css'

const Project = ({img,title,desc,link}) => {
    const [show, setShow] = useState(false)
  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
        <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className='project_content'>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>   
                ) : (
                    <img src={img} alt='nothing' />
                )
            }
        </div>
    </a>
  )
}

export default Project