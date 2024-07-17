import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './TopContainer.css'
import myImg from "../../assets/J1x1.jpg"

const TopContainer = () => {
  return (
    
        <Element name='about' className='topContainer'>
          <img src={myImg} className='topContainer_img' alt="Jegan" />
            <TopContent/>
        </Element>
    
  )
}

export default TopContainer