import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Aug
                <strong>2020</strong> - Nov
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>JUNIOR SOFTWARE DEVELOPER</strong>
                </h6>
                <p>
                  VCU
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2019</strong> - Sept
                <strong>2020</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>SENIOR PROJECT</strong>
                </h6>
                <p>
                  • Wrote Ansible playbook scripts to lint all YAML/BASH files in the airship repository 
                </p>
                <p>
                • Executed password rotations in Kubernetes clusters for continuous integration checks 
                </p>
                <p>
                • Developed on an Open-source Software project, alongside AT&T cloud team 
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
