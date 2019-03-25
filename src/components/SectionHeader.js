import React from 'react';
import './sectionHeader.css';

export default function SectionHeader(props) {
  return (
  <header>
    <div className='skew-more'>
      <div className='skew-less'>
        <h2>{props.header}</h2>
      </div>
    </div>
  </header>
  )
}
