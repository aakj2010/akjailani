import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa'


function Contact() {
  return (
    <section id="contact">
      <div class="container">
        <br />
        <br />
        <h2 class="text-center">
          <u>Contact</u>
        </h2>
        <br /><br /> <br />
        <div class="row contact ">
          <div className="col-lg-5 col-12 ">
            <br /><br />
            <div className="fw-bolder">
              <p><u>Get in Touch</u></p>
            </div>
            <div className=" fw-bold cont">
              <p>Phone : +91 8072056095</p>
            </div>
            <div className=" fw-bold cont">
              <p>Email : dev.jailani@gmail.com</p>
            </div>
            <div class="col-md-10 col-lg-5 col-xl-7">
              <ul class="list-inline text-center cont">
                <li class="list-inline-item">
                  <a href="https://github.com/aakj2010" target="_blank" className="social">
                    <FaGithub />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/devakjailani/" target="_blank" className="social">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div class="col-lg-5 col-12">
            <br />  <br />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name here" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div>
              <a href="mailto:dev.jailani@gmail.com?subject='Hiring For job'&body={body}">
                <button type="submit" className="btn btn-primary"> Send </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>


  );
}

export default Contact;
