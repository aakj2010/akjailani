import React from "react";
import './skill.css'
import html from '../Asset/html.png'
import css from '../Asset/css.png'
import javascript from '../Asset/javascript.png'
import bootstrap from '../Asset/bootstrap.png'
import react from '../Asset/react.png'
import redux from '../Asset/redux.png'
import mysql from '../Asset/mysql.png'
import mongodb from '../Asset/mongodb.png'
import nodejs from '../Asset/nodejs.png'
import postman from '../Asset/postman.png'
import github from '../Asset/github.png'
import ex from '../Asset/ex.png'
import heroku from '../Asset/heroku.png'
import netlify from '../Asset/netlify.png'
import AWS from '../Asset/AWS.png'


function Skills() {

    let skill = [
        {
            // icon: <img src="./Asset/html.png" alt="" className="HTML" />
            icon: <img src={html} alt="" className="HTML" />
        },
        {
            icon: <img src={css} alt="" className="HTML" />
        },
        {
            icon: <img src={javascript} alt="" className="HTML" />
        },
        {
            icon: <img src={bootstrap} alt="" className="HTML" />
        },
        {
            icon: <img src={react} alt="" className="HTML" />
        },
        {
            icon: <img src={redux} alt="" className="HTML" />
        },
        {
            icon: <img src={mysql} alt="" className="HTML" />
        },
        {
            icon: <img src={mongodb} alt="" className="HTML" />
        },
        {
            icon: <img src={nodejs} alt="" className="HTML" />
        },
        {
            icon: <img src={ex} alt="" className='HTML' />
        },
        {
            icon: <img src={postman} alt="" className="HTML" />
        },
        {
            icon: <img src={github} alt="" className="HTML" />
        },
        {
            icon: <img src={heroku} alt="" className='HTML' />
        },
        {
            icon: <img src={netlify} alt="" className="HTML" />
        },
        {
            icon: <img src={AWS} alt="" className="HTML" />
        }
    ]

    return (
        <>
            {/* <SideBar /> */}
            <section id="skill">
                <h2 class="text-center mt-5"><u>Skills</u></h2>
                <div class="container">
                    {/* <!-- p-lg-3 p-0 mb-lg-3 mb-0 --> */}
                    <div class="row d-flex justify-content-center">
                        {/* <img src={html} alt="" /> */}
                        {
                            skill.map((img) => {
                                return (
                                    <>
                                        <div class=" rounded shadow border-5 mb-2 mt-5 p-3 m-5" style={{ width: "7rem", height: "7rem" }} >
                                            <li style={{ display: "inline" }}>
                                                {img.icon}
                                            </li>
                                        </div>
                                    </>
                                )

                            })
                        }
                    </div>
                </div>
            </section>
        </>

        // <>

        //     <section className="breadcrumbs">
        //         <div className="container">
        //             <div className="d-flex justify-content-between align-items-center">
        //                 <main id="main">
        //                     <section id="skills" className="skills section-bg">
        //                         <div className="container">

        //                             <div className="section-title">
        //                                 <h2>Skills</h2>
        //                             </div>

        //                             <div className="row skills-content">

        //                                 {
        //                                     skill.map((img, index) => {
        //                                         return (
        //                                             <>
        //                                                 <div className="col-4 col-lg-2 col-md-2 col-sm-2 p-3" data-aos="fade-up" key={index} >

        //                                                     <div className="p-3">
        //                                                         {img.icon}
        //                                                     </div>

        //                                                 </div>
        //                                             </>
        //                                         )
        //                                     })
        //                                 }
        //                             </div>

        //                         </div>
        //                     </section>
        //                 </main>
        //             </div>
        //         </div>
        //     </section>

        // </>

    );
}

export default Skills;
