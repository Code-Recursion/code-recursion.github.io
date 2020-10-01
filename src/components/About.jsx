import React from "react";
import Portrait from "../images/portrait-ajay.svg";
import Linkedin from "../images/linkedin-icon.svg";
import Github from "../images/github-icon.svg";
import Email from "../images/email-icon.svg";
import Arrow from "../images/arrow-icon.svg";
import "../styles/about.css";
import "../styles/animation.css";

import html from "../images/html-icon.svg";
import css from "../images/css-icon.svg";
import js from "../images/js-icon.svg";
import react from "../images/react-icon.svg";
import git from "../images/git-icon.svg";
import c from "../images/c-icon.svg";
import cpp from "../images/cpp-icon.svg";
import github from "../images/github.svg";
import nodejs from "../images/nodejs-icon.svg";
import figma from "../images/figma-icon.svg";
import mysql from "../images/mysql-icon.svg";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11  mx-auto">
            <h2 className="hero_text text-center font-font-weight-bold">
              Web Developer, Programmer
            </h2>

            <div className="justify-content-center">
              <h6 className="mx-auto text-center">
                Hello! i am Ajay Singh, A pre
                final year Student Pursuing B.Tech
                with IT stream. I love to learn
                about new things and sharing what
                i learn. And yes i can Code!
              </h6>
            </div>

            <div className="container_portait text-center mt-5">
              <img src={Portrait}></img>
            </div>

            <div className="social_links  mt-4 d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/hello-ajay-singh/"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Linkedin}
                ></img>
              </a>

              <a
                href="https://github.com/Code-Recursion"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Github}
                ></img>
              </a>

              <a
                href="mailto:helloajaysingh1@gmail.com?subject=Hello&body=Hello Ajay!"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Email}
                ></img>
              </a>
            </div>

            <div className="container_arrow mb-5 mt-md-5 mt-xs-4 d-flex justify-content-center  floating arrow-down">
              <a href="#about-2">
                <img
                  className="mt-md-5"
                  src={Arrow}
                ></img>
              </a>
            </div>
          </div>
          <div className="col-11  mt-5 mx-auto">
            <h2 className="know_me_more mt-5 text-center font-font-weight-bold" id="know_more">
              Know Me More
            </h2>

            <div className="container mb-xl-5 pt-xl-5">
              <div className="row">
                <div className="col-md-6 col-12-xs">
                  <p className="">
                    Bansal Institute of Science
                    and Technology, Bhopal
                  </p>
                  <p className="text-muted">
                    B.Tech (Information
                    Technology) Current - 5th Sem
                  </p>
                  <p className="text-muted">
                    2018 - Present
                  </p>
                  <p className="">
                    Kendriya Vidyalaya No. 1,
                    Bhopal
                  </p>
                  <p className="text-muted">
                    Schooling (Maths Science)
                  </p>
                  <p className="text-muted">
                    2007 - 2018
                  </p>
                  <h5 className="">
                    What do i do?
                  </h5>
                  <ul className="">
                    <li className="">
                      Web Development
                    </li>
                    <li className="">
                      Android Development
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-12-xs">
                  <p>
                    I am an Aspiring Full Stack
                    Developer.
                  </p>
                  <p>
                    I Like C++ and JavaScript,
                    currently heading towards
                    Mastering Data Structures and
                    Algorithms, Im a beginner in
                    Competitive Programming and
                    do practice it in my free time.
                    Open source Enthusiast.                  </p>
                  <p className="text-muted">
                    I love listening to English
                    music and playing football.
                  </p>
                  <h5 className="text-center">
                    Tech stack i use frequently
                  </h5>
                  <div className="container container-icons text-center">
                    <img className="m-1"src={html}></img>
                    <img className="m-1"src={css}></img>
                    <img className="m-1"src={js}></img>
                    <img className="m-1"src={react}></img>
                    <img className="m-1"src={nodejs}></img>
                    <img className="m-1"src={figma}></img>
                    <img className="m-1"src={mysql}></img>
                    <img className="m-1"src={git}></img>
                    <img className="m-1"src={github}></img>
                    <img className="m-1"src={c}></img>
                    <img className="m-1"src={cpp}></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="container_arrow my-5 d-flex justify-content-center  floating arrow-up">
              <a href="#about1">
                <img
                  id="about-2"
                  className=""
                  src={Arrow}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
