import React from 'react';
import Eatinarary from './project-eatinarary.js';

export default function ProjectBoard(props) {
  return (
    <div>
      <ul>
        <Eatinarary />
        <br/>
      {Project()}
      </ul>
    </div>
  )
}


function Project() {
  return <li>this is a test</li>
}
