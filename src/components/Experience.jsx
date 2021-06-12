import React from 'react'
import ACCOLITE from '../images/experience/accolite-clear.svg'
import RMGX from '../images/experience/rmgx-icon.svg'
import DSC from '../images/experience/dsc-icon.svg'
import MLSA from '../images/experience/mlsa-beta.svg'
import GCLOUD from '../images/experience/gcloud-icon.svg'

import '../styles/experience.css'
const Experience = () => {
  const ExperienceData = [
    {
      title: 'Software Development Intern',
      subtitle: 'Accolite digital, Bangalore',
      image: ACCOLITE,
      duration: 'February 2021 - August 2021',
      link: 'https://www.accolite.com/',
    },

    {
      title: 'Web Development Intern',
      subtitle: ' RMgX Technologies LLP, Gurgaon (Haryana)',
      image: RMGX,
      duration: 'August 2020 - October 2020',
      link: 'https://www.rmgx.in/',
    },
  ]

  const ExtraCurricular = [
    {
      title: 'Microsoft Learn Student Ambassador - Beta',
      subtitle:
        'The Microsoft Student Partner program is a global group of on-campus ambassadors who are eager to help fellow students, lead in their local tech community, and develop technical and career skills for the future. They might find themselves organizing a hackathon to solve the world’s toughest problems, mentoring fellow students, or unlocking the next great idea with their team—it’s all up to them. ',
      image: MLSA,
      duration: 'May 2021 - Present',
      link: '',
    },
    {
      title: 'Developer Student Clubs Lead at BIST, Bhopal',
      subtitle:
        'Google Developer Student Club Leads are passionate leaders at their university who are dedicated to helping their peers learn and connect. These Leads may be pursuing various undergraduate or graduate university degrees but have a good foundational knowledge of software development concepts. chapter link - https://dsc.community.dev/bansal-institute-of-science-and-technology/',
      image: DSC,
      duration: 'Session 2020-21',
      link: 'https://dsc-bist.web.app/',
    },
    {
      title: ' Google Cloud Facilitator at BIST, Bhopal',
      subtitle:
        'Helped student in kick starting their cloud journey with Google Cloud',
      image: GCLOUD,
      duration: '#30DaysOfGoogleCloud | September 2020 - October 2020',
      link: '',
    },
  ]

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11  mx-auto'>
            <h1 className='text-center'>Professional Experience</h1>
            {ExperienceData.map((experience) => (
              <div className='dsc mt-4 justify-content-center text-center'>
                <h4 className='text-center'>{experience.title}</h4>
                <p className='text-muted d-3 text-center '>
                  {experience.subtitle}
                </p>
                <a target='_blank' href={experience.link}>
                  <img
                    className='text-center justify-content-center m-1 p-1 exp-image'
                    src={experience.image}
                  />
                </a>
                <p className='text-muted d-3 text-center'>
                  {experience.duration}
                </p>
                <hr className="horizontal-line m-5" />
              </div>
            ))}
          </div>
        </div>
        <div className='row'>
          <div className='col-11  mx-auto'>
            <h1 className='text-center'>Extra Curricular</h1>
            {ExtraCurricular.map((extraCurricular) => (
              <div className='justify-content-center text-center'>
                <h4 className='text-center'>{extraCurricular.title}</h4>
                <a target='_blank' href={extraCurricular.link}>
                  <img
                    className='text-center justify-content-center m-1 p-1 exp-image'
                    src={extraCurricular.image}
                  />
                </a>
                <p className='text-muted d-3 text-center '>
                  {extraCurricular.subtitle}
                </p>
                <p className='text-muted d-3 text-center'>
                  {extraCurricular.duration}
                </p>
                <hr className="horizontal-line m-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
