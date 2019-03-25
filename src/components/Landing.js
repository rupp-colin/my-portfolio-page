import React from 'react';
import '../styles/landing.css';
import arrow from '../images/scroll-down.gif';

const LandingSection = () => {
  return (
    <div id="landing-board" className="flex">
      <section id="left-landing">
        <div className="welcome-text">
          <h1>Hi there</h1>
          <p>My name is <u>Colin</u>.  Don't let the scrubs fool you. When I'm not saving lives I'm busy writing code.</p>
          <img id="scroll-down" src={arrow} alt="down arrow" />
        </div>
      </section>

      <section id="right-landing">

      </section>
    </div>
  )
}

export default LandingSection
