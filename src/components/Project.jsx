import React from "react";
import p1 from "../images/p-1.JPG";
import p2 from "../images/p-2.JPG";
import p3 from "../images/p-3.JPG";
import p4 from "../images/p-4.jpg";
import p5 from "../images/p-5.JPG";
import p6 from "../images/p-6.JPG";
import p7 from "../images/p-7.JPG";
import p8 from "../images/p-8.JPG";
import link from "../images/link-icon.svg";
import github from "../images/github-link.svg";
import "../styles/project.css";

const Project = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-11  mx-auto">
            <h1 className="text-center">
              Project
            </h1>

            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder mb-3">
                    Movie Pedia
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p1}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          A Web App to recount all
                          details related to any
                          movie/anime/tv-show/cartoon.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          JavaScript | AJAX |
                          JQuery | BootStrap
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/Movie-Pedia">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                          <a href="https://helloajaysingh.me/Movie-Pedia/">
                            <img
                              className="mx-2"
                              src={link}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    React Porfolio
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p2}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          Personal Portfolio for
                          Developers Buit from
                          Scratch Using ReactJS.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          React | JavaScript |
                          BootStrap
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/code-recursion.github.io">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                          <a href="https://helloajaysingh.me">
                            <img
                              className="mx-2"
                              src={link}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    Student Record Management
                    System
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p8}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          A minimalist desktop app
                          to managae students
                          record. Perform Full
                          CRUD Operation, Data is
                          saved directly into an
                          excel file to decrease
                          data Entry labour cost
                          and improves efficiency.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          C++ | File handling
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/Student-Record-Management-System">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    RideSharing-UberLyft-Clone
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p5}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          Android Ridesharing App
                          like Uber and Lyft Made
                          in Kotlin Aimed in
                          Learning about Google's
                          direction and places API
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          Kotlin | Google places
                          API
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/RideSharing-UberLyft-Clone">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    System Control
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p7}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          A CLI Based Desktop App
                          that Performs Operations
                          like Shutdown, Restart
                          commands in a matter off
                          seconds. Only works on
                          windows (any version)
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          C Language
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/system-control">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    CLI Tic Tac Toe
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p6}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          Tic Tac Toe Game made in
                          Cpp having Command Line
                          User Interface.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          C++
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/TicTacToe">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    Todo - Notes App
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p3}
                        className="card-img"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          Simple Todo Notes
                          Application Features
                          like Light weight and
                          Simple UI Can add images
                          with notes Auto Delete
                          Tasks under 15 min if
                          Checked.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          Kotlin | XML | Android
                          Studio
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/TodoNotesApp">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    Virtual Dice
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p4}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          An app build while in
                          the part of 30 Days of
                          Kotlin by Google
                          Developers
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          Kotlin | XML | Android
                          Studio
                        </p>

                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/VirtualDice">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4 mb-4">
                  <a href="https://github.com/code-recursion" target="_blank">
                    <div className="card mt-5">
                      <div className="image card-img">
                        <div class="card-body">
                          <p class="card-text">
                            <h5 className="text-center text-bolder  mb-3">
                              Star My Projects and
                              Follow me on Github
                          </h5>
                          </p>
                          <div className="container d-flex m-0 justify-content-center">
                            <img
                              className=" text-center m-auto align-item-center mx-2"
                              src={github}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
