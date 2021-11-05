import React from 'react';
import Project from './Project';
import '../../styles/Portfolio.css';



export default function Portfolio() {
  return (
    <div class="container">
      <h1>Portfolio</h1>
      <p class="port-p">Hover over images to display links to projects.</p>
      <Project />
    </div>
  );
}