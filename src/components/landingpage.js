import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/*<img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              />*/}
            <img
              src={require("../assets/avatar_profile.png")}
              alt="avatar"
              className="avatar-img"
              />
            <p>Akhmad Farid b. Mohd Juh</p>

            <div className="banner-text">
              <h1>Junior Software Engineer</h1>

              <hr/> 

              <p>HTML/CSS | Bootstrap | JavaScript | AngularJS | React | MongoDB | Java</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="linkedin.com/in/farid-a-70820512a" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/AkhmadFarid/Farid-A" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/kanata.zq.1" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* Youtube
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a> */}

                {/* Freecodecamp
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
