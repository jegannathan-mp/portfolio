import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import './ProjectContainer.css'

import project1 from '../../assets/todoMERN.png'
import project2 from '../../assets/shoppingCart.png'
import project3 from '../../assets/robot.png'
import project4 from '../../assets/car.png'
import project5 from '../../assets/musicCard.png'
import project6 from '../../assets/expenseTracker.png'
import project7 from '../../assets/stickyNotes.png'
import project8 from '../../assets/digitalClock.png'
import project9 from '../../assets/basicForm.png'

const ProjectContainer = () => {

    const projects = [
        {
            img: project1,
            title: 'Todo MERN',
            description: 'Built with the MERN stack and styled with Reactstrap, the project features secure user authentication using Node.js, JWT tokens, and bcrypt for passwords, leveraging MongoDB cloud storage for efficient data management. Each user manages tasks through their unique email for personalized and secure access.',
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/TodoListMERN',
        },
        {
            img: project2,
            title: 'Shopping Cart',
            description: 'Developed using HTML, CSS, and JavaScript, this app features an impressive UI with food items as cards that can be added to a cart. Users can review and cancel orders, with each item orderable only once.',
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/ShoppingCart',
        },
        {
            img: project3,
            title: 'Robot Layout',
            description: "This project, built with HTML, CSS, and JavaScript, features an amazing UI with a custom blue-centered transparent cursor that follows the mouse. It showcases innovative design and interactivity.",
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/RoboLayout',
        },
        {
            img: project4,
            title: 'Car Booking',
            description: 'Built with React and Reactstrap, CarBooking features a stunning sign-in/sign-up page, home page carousel, and detailed navigation. It includes an about page, car blog, car listings as cards, contact page, and a location map.',
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/carBooking',
        },
        {
            img: project5,
            title: 'Music Card',
            description: 'Built with HTML, CSS, and JavaScript, MusicCard features an impressive progress bar, box shadows, and text shadows. It includes buttons for shuffle, repeat, forward, backward, mute, unmute, adjust timing, pause, and play.',
            link: 'https://github.com/jegannathan-mp/MusicPlayer',
        },
        {
            img: project6,
            title: 'Expense Tracker',
            description: 'Built with HTML, CSS, and JavaScript, the Expense Tracker features a stylish UI with input fields for income and expenses. Each entry appears as a card with an interactive delete icon on hover, simplifying financial record management.',
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/ExpenseTrackerPro',
        },
        {
            img: project7,
            title: 'Sticky Notes',
            description: 'Created with HTML, CSS, and JavaScript, Sticky Notes includes a button that opens a new text area for adding notes. Notes can be easily removed by double-clicking on them, providing a simple and intuitive note-taking experience.',
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/StickyNotes',
        },
        {
            img: project8,
            title: 'Digital Clock',
            description: 'Developed with HTML, CSS, and JavaScript, this Digital Clock showcases the current time using a font resembling classic digital numbers. Its simple and amazing UI enhances readability and user experience.',
            link: 'https://github.com/jegannathan-mp/Projects/tree/main/DigitalClock',
        },
        {
            img: project9,
            title: 'Basic Form',
            description: 'Using HTML, CSS, and JavaScript, this project includes buttons (Pending, Approved, Remove) to categorize name, number, and email inputs into a table based on selection, streamlining data organization and management.',
            link: 'https://github.com/jegannathan-mp/BasicForm',
        },
    ];


  return (
    <Element className='projectcontainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects which I done for making lives of people easy</p>
        <div className='projectcontainer_projects'>
{
    projects.map((project,index)=>
        (
            <Project key={index} img={project.img} title={project.title} desc={project.description} link={project.link}/>
        )
    )
}
        </div>
    </Element>

  )
}

export default ProjectContainer