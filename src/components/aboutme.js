import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div>
        <Grid className="about-grid">
          <Cell className="about-grid-content" col={12}>
            <div>
              <h1>About Me</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br/>
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br/>
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br/>
              deserunt mollit anim id est laborum.</p>
              {/* <div className="about-images">
                <div col={12}>
                  <img
                    src={require("../assets/fifaCom.jpg")}
                    alt="img"
                    />
                </div>
              </div> */}
              <div className="banner-block">
                {/* <h1>Junior Software Engineer</h1>

                <hr/> 

                <p>HTML/CSS | Bootstrap | JavaScript | AngularJS | React | MongoDB | Java</p> */}

                <div className="hobbies-img" col={12}>

                  <img
                    className="imgElm"
                    src={require("../assets/fifaCom.jpg")}
                    alt="img"
                    />

                  <img
                    className="imgElm"
                    src={require("../assets/associationFootball.jpg")}
                    alt="img"
                    />

                  <img
                    className="imgElm"
                    src={require("../assets/imagesBadminton.jpg")}
                    alt="img"
                    />

                  {/* LinkedIn
                  <a href="linkedin.com/in/farid-a-70820512a" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  Github
                  <a href="https://github.com/AkhmadFarid/Farid-A" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                  Facebook
                  <a href="https://www.facebook.com/kanata.zq.1" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                  </a>

                  Youtube
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                  </a>

                Freecodecamp
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                  </a> */}

                </div>
              </div>
              
              
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br/>
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit <br/>
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br/>
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et <br/>
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit <br/>
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil <br/>
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
