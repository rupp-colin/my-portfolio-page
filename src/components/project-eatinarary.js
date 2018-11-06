import React from 'react';
import EatinararySS from '../Eatinarary-screenshot1.png';
import './projects.css';

export default class Eatinarary extends React.Component {

  state = {
    moreInfo: true
  }

  showHide() {
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }

  render() {
  const moreInfo = this.state.moreInfo;
    return (
        <div className="row project-left">
          <div className="col-6">
            <h2 >Eatinarary</h2>
            <p >Eatinarary is a meal prep app allowing users to have a one-stop-shop experience where they can search for
              recipes, upload their own recipes, and store them all in a personalized online recipe book. Everyone loves
              food! Eatinarary makes it simpler to find and love the food you love.
            </p>
            {!moreInfo && <p className="more" onClick={() => this.showHide()}>more >>></p>}
            {/*{moreInfo && <p onClick={() => this.showHide()}>Learn less (>'')></p>}*/}

            {moreInfo === true && <TechList hide={() => this.showHide()}/>}
          </div>
          <div className="col-6 pic-container">
            <a
              href="https://eatinarary.herokuapp.com/"
              target="_blank"
              ref="noopener noreferrer"
            >
              <img src={EatinararySS} alt="Eatinarary screenshot"></img>
            </a>
          </div>
        </div>
    )
  }
  }

  function TechList(props) {
    return (
      <div>
        <ul className="col-12">
          <li className="tech-icon">
            <i className="devicon-react-original-wordmark"></i>
          </li>
          <li className="tech-icon">
            <i className="devicon-express-original"></i>
          </li>
          <li className="tech-icon">
            <i className="devicon-nodejs-plain"></i>
          </li>
          <li className="tech-icon">
            <i className="devicon-html5-plain-wordmark"></i>
          </li>
          <li className="tech-icon">
            <i className="devicon-css3-plain-wordmark"></i>
          </li>

          <li className="tech-icon">
            <i className="devicon-javascript-plain"></i>
          </li>
          <li className="tech-icon">
            <i className="devicon-mongodb-plain-wordmark"></i>
          </li>
          <li className="tech-icon">
            <i className="devicon-heroku-original-wordmark"></i>
          </li>
        </ul>
        <p className="less" onClick={() => props.hide()}>less {"<<<"} </p>
      </div>
    )
  }
