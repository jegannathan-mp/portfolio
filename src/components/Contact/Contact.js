import { LinkedIn,Facebook,Instagram } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email : <span>mpjegannathanmech@gmail.com</span>
            </p>
            <p>
                Github Username : <span>jegannathan-mp</span>
            </p>
            <div className='contact_icons'>
            <a href='https://www.linkedin.com/in/mpjegannathanmech' target='_blank' rel="noopener noreferrer">
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>
            <a href='https://www.facebook.com/ijackxx' target='_blank' rel="noopener noreferrer">
                <IconButton>
                    <Facebook/>
                </IconButton>
            </a>
            <a href='https://www.instagram.com/_._jon.snow_._' target='_blank' rel="noopener noreferrer">
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
        </div>
        </div>
        
    </Element>
  )
}

export default Contact