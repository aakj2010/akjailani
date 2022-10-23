import React from 'react'
import './SideBar.css'
// import HomeIcon from '@mui/icons-material/Home'
// import InfoIcon from '@mui/icons-material/Info'
// import WorkIcon from '@mui/icons-material/Work'
// import PermMediaIcon from '@mui/icons-material/PermMedia'
// import ContactPageIcon from '@mui/icons-material/ContactPage'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SideBar() {
    return (
        <>
            <div>
                
                <nav className='sidenav'>
                <ul>
                    <h4>AK Jailani</h4>
                    <p>MERN Stack Devoloper</p>
                </ul>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/portal/about'>About</Link>
                        <Link to='/portal/skill'>Skills</Link>
                        <Link to='/portal/project'>Project </Link>
                        <Link to='/portal/contact'>Contact</Link>
                        <button href="#!" className='social'>
                            <span className='' ><FaGithub /></span>
                        </button>
                        <button href="#!" className='social'>
                            <span className=''><FaLinkedin /></span>
                        </button>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SideBar



/* <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div> */