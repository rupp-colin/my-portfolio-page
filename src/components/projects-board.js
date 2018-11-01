import React from 'react';
import './projects-board.css';
import Eatinarary from './project-eatinarary.js';

export default function ProjectBoard(props) {
  return (
    <div>
      <h2 className="row" id="project-board-header">Projects</h2>
        <Eatinarary />
        <br/>
      {Project()}
    </div>
  )
}


function Project() {
  return <li>this is a test</li>
}
