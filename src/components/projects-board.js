import React from 'react';
import './projects-board.css';
import Eatinarary from './project-eatinarary.js';
import SpaceGame from './project-spacegame.js';
import Echar from './project-echar.js';
import Truckd from './project-truckd.js';

export default function ProjectBoard(props) {
  return (
    <div id="project-board-header">
      <h2 className="row" id="projects-header">Projects</h2>
        <Truckd />
        <br/>
        <Echar />
        <br/>
        <Eatinarary />
        <br/>
        <SpaceGame />
    </div>
  )
}
