import React from 'react';
import './about-me.css';
import profilePic from '../images/colin.png';

export default function AboutMe(props) {
  return(
    <div id="about-me" className="row">
      <h2 id="about-header">About Me</h2>
      <img
        id="pic-of-me"
        src={profilePic}
        alt="Colin, looking incredibly handsome"/>
      <p>I have always had a passion for creating and deeply understanding the world around me.
        In a world where technology is everywhere, this has naturally led to a passion for web
        development.  I have grown to love building tangible projects out of nothing more than
        code, and continually enjoy learning new languages, libraries, and techniques.
        I find great comfort in unfamiliar challenges, seeing them as an opportunity to challenge
        my own limitations as well as create new possibilities to positively affect the world
        around me.  When I'm not exploring new technologies, I am typically found learning new
        instruments, working out, or relaxing and catching up with the people I love most in this
        world.</p>
    </div>
  )
}
