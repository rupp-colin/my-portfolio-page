import React from 'react';
import './header.css';

export default function Header(props){
  return (
    <div className="row header">
      <div className="col-12">
        <h1 id="i-am-colin">Colin Rupp</h1>
        <span id="my-title"><p>full stack developer</p></span>
      </div>
      {/*<p className="col-12">full stack developer</p>*/}
    </div>
  )
}
