import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Motivated software developer graduate from Southern Illinois University Edwardsville with a little over a year 
            experience in the industry. I'm seeking to use my dominate skills in C# and Javascript(React) to further my career path.
            I'm always open to learning new skills, languages, and frameworks to further my skillset, and to be a more valuable asset
            to the team. 
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 128 N Main St. Unit A
              </p>
              <p>
                <strong>Email:</strong> bdittme@outlook.com
              </p>
              <p>
                <strong>Phone:</strong> 217-257-9174
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Main Programming Language</strong> - C#
              </p>
              <p>
                <strong>Hobbies</strong> - Woodworking/Cooking/Gaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
