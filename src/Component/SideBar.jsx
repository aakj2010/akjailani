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
                    <Link to='/'><h4>AK Jailani</h4></Link>    
                    </ul>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/portal/about'>About</Link>
                        <Link to='/portal/skill'>Skills</Link>
                        <Link to='/portal/project'>Projects </Link>
                        <Link to='/portal/contact'>Contact</Link>
                        <button className='social'>
                            <a href="https://github.com/aakj2010" target="_blank" className="">
                                <span className='' ><FaGithub /></span>
                            </a>
                        </button>
                        <button className='social'>
                            <a href="https://www.linkedin.com/in/devakjailani/" target="_blank" className="">
                                <span className=''><FaLinkedin /></span>
                            </a>
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