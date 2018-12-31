import React from 'react';
import ScreenShotOne from '../images/echar-ss1.png';
import ScreenShotTwo from '../images/echar-ss2.png';

export default class Echar extends React.Component {

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
      <div className="row project-right">
        <div className="col-6 pic-container">
          <a
            href=""
            target="_blank"
            ref="noopener noreferrer"
          >
            <img src={ScreenShotOne} alt="screnshot of main app page"></img>
          </a>
          <a
            href=""
            target="_blank"
            ref="noopener noreferrer"
          >
            <img src={ScreenShotTwo} alt="screen shot of user progress page"></img>
          </a>
        </div>
        <div className="col-6">
          <h2>Echar Agua al Mar</h2>
          <p> Echar Agua al Mar (literally meaning to throw water at the sea) is a fullstack
            flashcard app that uses spaced repetition to help users learn spanish vocabulary words.
            What makes this app different from other flashcard apps is the use of an algorithm that
            determines how often a word should be shown to a learner in order to maximize learning
            potential.
          </p>
          {!moreInfo && <p className="more" onClick={() => this.showHide()}>more >>></p>}
          {moreInfo === true && <TechList hide={() => this.showHide()}/>}
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
        <p className="less" onClick={() => props.hide()}>less {"<<<"}</p>
      </div>
    )
  }

