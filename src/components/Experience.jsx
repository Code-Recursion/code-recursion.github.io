import React from "react";
import DSC from "../images/dsc-icon.svg";
import RMGX from "../images/rmgx-icon.png";
import GCLOUD from "../images/gcloud-icon.svg";
import GCLOUD2 from "../images/gcloud-icon2.svg";
// import RMGX from "../images/rmgx-icon.png";
import "../styles/experience.css";
const Experience = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11  mx-auto">
            <h1 className="text-center">
              Experience
            </h1>
            <div className="dsc mt-4 justify-content-center text-center">
              <h4 className="text-center">
                Developer Student Clubs Lead
                at BIST, Bhopal
              </h4>
              <a
                target="_blank"
                href="https://dsc.community.dev/bansal-institute-of-science-and-technology/ "
              >
                <img
                  className="text-center justify-content-center mt-2"
                  src={DSC}
                />
              </a>
              <p className="text-muted d-3 text-center">
                Session 2020-21
              </p>
            </div>
            <hr className="horizontal-line" />

            <div className="rmgx mt-2 justify-content-center text-center">
              <h4 className="text-center">
                Web Development Intern
              </h4>

              <p className="text-muted d-3 text-center ">
                RMgX Technologies LLP, Gurgaon
                (Haryana)
              </p>
              <a
                href="https://www.rmgx.in/"
                target="_blank"
              >
                <img
                  className="text-center justify-content-center mb"
                  src={RMGX}
                />
              </a>
              <p className="text-muted d-3 text-center pt-4 mb-2">
                August 2020 - October 2020
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="gcloud mt-4 mb-5 justify-content-center text-center">
              <h4 className="text-center mb-4">
                Google Cloud Facilitator at BIST,
                Bhopal
              </h4>
              <a
                target="_blank"
                href="https://dsc.community.dev/bansal-institute-of-science-and-technology/ "
              >
                <img
                  className="text-center justify-content-center mt-2"
                  src={GCLOUD}
                />
              </a>
              <p className="text-muted d-3 text-center">
                #30DaysOfGoogleCloud | September 2020 - October 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
