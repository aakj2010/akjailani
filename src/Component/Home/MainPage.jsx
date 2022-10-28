import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
// import '../App.css';
import './MainPage.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MainPage() {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">

                    <a className="navbar-brand" href="#">  AK Jailani</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#skill">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <section className=''>

                <div className="App">

                    <h1>Ak Jailani</h1>
                    <p id='p'>
                        MERN Stack Devoloper
                    </p>
                    {/* <button type="button" className="btn btn-outline-dark text-bold">Resume</button> */}
                    <button type="button" className="btn btn-outline-dark text-bold">
                        <a href={require("../Asset/Resume.pdf")} className="resume" download="Resume">Resume</a>
                    </button>
                    <br />

                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/aakj2010" target="_blank" className='socialicons'>
                                            <FaGithub />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/devakjailani/" target="_blank" className='socialicons' >
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                    <div classNameName='d-flex justify-content-center'>
                        <Link to="/portal/about" className=" ">
                            <i className="arrow down " ></i>
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )
}

export default MainPage