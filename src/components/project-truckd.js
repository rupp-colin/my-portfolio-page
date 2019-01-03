import React from 'react';
import ScreenShotOne from '../images/truckd-ss1.png';
import ScreenShotTwo from '../images/truckd-ss2.png';

export default class Truckd extends React.Component {

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
          <h2 className="project-title">Truck'd</h2>
          <p className="project-desc">Truck'd is a fullstack project that connects users who are seeking help moving with users
            who own a truck and are looking to make some quick cash. Through use of the google maps
            API, users can easily find or post jobs.  Drivers are able to bid on jobs, ensuring the
            job poster gets the best deal, and drivers get a reasonable rate for their time and
            service.
          </p>
          {!moreInfo && <p className="more" onClick={() => this.showHide()}>more >>></p>}
          {moreInfo === true && <TechList hide={() => this.showHide()}/>}
        </div>
        <div className="col-6 pic-container">
          <a
            href="https://mountain-men-truckd.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ScreenShotOne} alt="screnshot of main app page"></img>
          </a>
          <a
            href="https://mountain-men-truckd.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ScreenShotTwo} alt="screen shot of user progress page"></img>
          </a>
          <LiveLinks />
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
            <i className="devicon-google-plain"></i>
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
          <li className="tech-icon">
            <i className="devicon-trello-plain"></i>
          </li>
        </ul>
        {/*<p className="less" onClick={() => props.hide()}>less {"<<<"}</p>*/}
      </div>
    )
  }


  function LiveLinks(props) {
    return (
      <div className="row">
        <a
          className="col-4 live-link"
          href="https://github.com/thinkful-ei24/mountain-men-client/tree/master/src"
        >Client Repo {">>>"}
        </a>
        <a
          className="col-4 live-link"
          href="https://github.com/thinkful-ei24/mountain-men-server"
        >Server Repo {">>>"}
        </a>
        <a
          className="col-4 live-link"
          href="https://mountain-men-truckd.herokuapp.com"
        >Live Link {">>>"}
        </a>
      </div>
    )
  }
