import React from 'react'
import PORTFOLIO from '../images/project/portfolio.JPG'
import MOVIE_PEDIA from '../images/project/movie-pedia.JPG'
// import RIDE from '../images/project/ride.jpg'
import SEEKERS from '../images/project/seekers.png'
import SRMS from '../images/project/srms.JPG'
import SYSTEM_CONTROL from '../images/project/system-control.JPG'
import SPARKY from '../images/project/sparky.png'
import TIC_TAC_TOE from '../images/project/tic-tac-toe.JPG'
import UI_CALCULATOR from '../images/project/ui-calculator.jfif'
import PHONEBOOK from '../images/project/phonebook.png'
import DSC_BIST from '../images/project/dsc-bist.png'
import SHORTLY from '../images/project/shortly.png'

import GITHUB_ICON from '../images/github-link.svg'
import LINK_ICON from '../images/link-icon.svg'

import '../styles/project.css'

const Project = () => {
  const projectList = [
    {
      title: 'Phonebook',
      image: PHONEBOOK,
      githubUrl: 'https://github.com/Code-Recursion/Phonebook',
      liveUrl: 'https://thawing-wave-71967.herokuapp.com/',
      description: 'Full Stack Phonebook App',
      tech: 'ReactJS, NodeJS, MongoDB, ExpressJS',
    },
    {
      title: 'Seekers',
      image: SEEKERS,
      githubUrl: 'https://github.com/Code-Recursion/Phonebook',
      liveUrl: 'https://seekers-web.herokuapp.com/',
      description:
        'Seeker is a job searching site that helps thousands of people to find a perfect fit job based on their skills. Seekers provide a wide variety of job opportunities for freshers and remove their tension of wondering. Seeker builds  Basically Seekers provides a way to grab the right opportunity.',
      tech: 'ReactJS, NodeJS, MongoDB, ExpressJS',
    },
    {
      title: 'DSC BIST',
      image: DSC_BIST,
      githubUrl: 'https://github.com/Code-Recursion/DSC-BIST',
      liveUrl: 'https://dsc-bist.web.app/',
      description:
        'Developer Student Club BIST, Bhopal Official Website written in ReactJS by team of DSC-BIST',
      tech: 'ReactJS | BootStrap',
    },
    {
      title: 'Movie Pedia',
      image: MOVIE_PEDIA,
      githubUrl: 'https://github.com/Code-Recursion/Movie-Pedia',
      liveUrl: 'https://helloajaysingh.me/Movie-Pedia',
      description:
        ' A Web App to recount all details related to any movie/anime/tv-show/cartoon.',
      tech: ' JavaScript | AJAX | JQuery | BootStrap',
    },
    {
      title: 'React Porfolio',
      image: PORTFOLIO,
      githubUrl: 'https://github.com/Code-Recursion/code-recursion.github.io',
      liveUrl: 'https://code-recursion.github.io',
      description:
        ' Personal Portfolio for Developers Buit from Scratch Using ReactJS.',
      tech: ' React | JavaScript | BootStrap',
    },
    {
      title: 'Shortly',
      image: SHORTLY,
      githubUrl: 'https://github.com/Code-Recursion/shortly',
      liveUrl: 'shortly-live.web.app',
      description:
        'Url Shortner UI build with Pure HTML/CSS/JS/React without any css framework.',
      tech: 'ReactJs | CSS3',
    },
    {
      title: 'Sparky',
      image: SPARKY,
      githubUrl: 'https://github.com/Code-Recursion/Sparky',
      liveUrl: 'https://github.io/code-recursion/Sparky/',
      description:
        'A beautify and minimalist Music player written in JavaScript.',
      tech: 'HTML | CSS | Javascript',
    },
    {
      title: 'Student Record Management System',
      image: SRMS,
      githubUrl:
        'https://github.com/Code-Recursion/Student-Record-Management-System',
      liveUrl: '',
      description:
        'A minimalist desktop app to managae students record. record are saved directly on an excel file to decrease data Entry labour cost and improves efficiency.',
      tech: '',
    },
    {
      title: 'UI Calculator',
      image: UI_CALCULATOR,
      githubUrl: 'https://github.com/Code-Recursion/UI-Calculator',
      liveUrl: 'https://code-recursion.github.io/UI-Calculator/',
      description: 'Simple Calculator With Clean UI.',
      tech: '',
    },
    {
      title: 'Tic Tac Toe',
      image: TIC_TAC_TOE,
      githubUrl: 'https://github.com/Code-Recursion/TicTacToe',
      liveUrl: '',
      description: 'Command Line based Tic Tac Toe game',
      tech: 'C++',
    },
    {
      title: 'System Control',
      image: SYSTEM_CONTROL,
      githubUrl: 'https://github.com/Code-Recursion/System-Control',
      liveUrl: '',
      description:
        'Perform all shutdown related commands in a matter off seconds. works on windows (any version)',
      tech: 'C++',
    },
  ]
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11  mx-auto'>
            <h1 className='text-center'>Project</h1>

            <div className='container d-flex justify-content-center mb-5'>
              <div className='row'>
                {projectList.map((project) => (
                  <div className='col-md-4 col-xs-12 mt-4'>
                    <h4 className='text-center text-bolder mb-3'>
                      {project.title}
                    </h4>
                    <div className='card'>
                      <div className='image card-img'>
                        <img src={project.image} className='card-img-top'></img>
                        <div class='card-body'>
                          <p class='card-text'>{project.description}</p>
                          <p class='card-text text-bolder d-5 text-muted'>
                            {project.tech}
                          </p>
                          <div className='container d-flex justify-content-center mb-3'>
                            <a href={project.githubUrl}>
                              <img className='mx-2' src={GITHUB_ICON}></img>
                            </a>
                            {project.liveUrl && (
                              <a href={project.liveUrl}>
                                <img className='mx-2' src={LINK_ICON}></img>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="col-md-4 col-xs-12 mt-4">
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
                </div> */}
                {/* <div className="col-md-4 col-xs-12 mt-4 mb-4">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
