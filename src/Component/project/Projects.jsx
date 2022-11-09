import React from 'react'
import Pinterest from '../Asset/Pinterest.png'
import pinterestbg from '../Asset/pinterestbg.png'
import favicon from '../Asset/favicon.png'
import './Project.css'
import { FaGithub, FaOpenid, FaPinterest, FaStackOverflow } from 'react-icons/fa'

function Projects() {


  return (
    <section className="project">
      <div className="title">
        <h2 className="text-center mt-3 title"><u>Projects</u></h2>
      </div>
      <div className='project_list'>

        <div className="container_project">
          <div className="banner-img1 ">
            {/* <img src={pinterestbg} alt="" /> */}
            {/* <img src={favicon} alt="" /> */}
            <span className='logo ' style={{ color: '#e60023' }}>
              <FaPinterest />
            </span>

          </div>
          <h2 className="name">
            Pinterest Clone
          </h2>
          <div className="btn-cont">
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://github.com/aakj2010/pinterest")
              }
            >
              Github FE <FaGithub />
            </button>
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://superb-daifuku-4177a8.netlify.app/")
              }
            >
              View Site <FaOpenid />
            </button>
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://github.com/aakj2010/pinterest-server")
              }
            >
              Github BE <FaGithub />
            </button>
          </div>
          <p className="project_description">
            This is Fullstack MERN website made it as a Pinterest.
            This application is used to search Images and Videos.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              REACT, NODE JS, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div className="container_project">
          <div className="banner-img1">
            <span className='logo ' style={{ color: '#f48024' }}>
              <FaStackOverflow />
            </span>
          </div>
          <h2 className="name" style={{ color: '#f48024' }}>
            Stackoverflow Clone
          </h2>
          <div className="btn-cont">
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://github.com/aakj2010/sofcfd")
              }
            >
              Github FE <FaGithub />
            </button>
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://superb-sprite-48c5a0.netlify.app")
              }
            >
              View Site <FaOpenid />
            </button>
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://github.com/aakj2010/sofcbd")
              }
            >
              Github BE <FaGithub />
            </button>
          </div>
          <p className="project_description">
            Stack Overflow is a question and answer website for professional and enthusiast programmers.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              REACT, NODE JS, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>


        {/* <div className="container_project">
          <div className="banner-img1">
            <span className='logo ' style={{ color: '#e60023' }}>
              <FaStackOverflow />
            </span>
          </div>
          <h2 className="name">
            Pinterest Clone
          </h2>
          <div className="btn-cont">
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://github.com/aakj2010/pinterest")
              }
            >
              Github FE <FaGithub />
            </button>
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://superb-daifuku-4177a8.netlify.app/")
              }
            >
              View Site <FaOpenid />
            </button>
            <button
              className="project_btn"
              onClick={() =>
                window.open("https://github.com/aakj2010/pinterest-server")
              }
            >
              Github BE <FaGithub />
            </button>
          </div>
          <p className="project_description">
            This is Fullstack MERN website made it as a Pinterest.
            <br></br>This application is used to search Images and Videos.
            <br />
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              REACT, NODE JS, EXPRESS JS, MONGODB
            </span>
          </p>
        </div> */}
      </div>


    </section>
  )
}

export default Projects