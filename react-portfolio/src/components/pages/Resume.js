import React from 'react';
import PDF from '../../assets/images/EvanArbour_Resume.pdf'
import '../../styles/Resume.css'

export default function Resume() {
  return (
    <div>
      <h1 class="page-title">Resume</h1>
      <h3 class="resume-p"><a class="resume-link"href={PDF} download="Evan-Arbour.pdf" target="_blank" rel="noreferrer">PDF Download</a></h3>

      <div class="container">
        <div class="row">
            <div class="col-lg-7 col-sm-12 order-1">
                <p>
                    Full stack web developer using background in performance and exercise
                    science to create responsive and meaningful user interactions. Earned 
                    a certificate in full stack development from the University of Washington 
                    with skills in HTML, CSS, JavaScript, React, and Node.js. Known as a quick 
                    learner and hard worker who strives to produce high-quality products with 
                    engaging and useful interfaces.
                </p>
                    <span>{<br/>}</span>
                <p>
                    TECHNICAL SKILLS
                        <span>{<br/>}</span>
                    Languages: JavaScript ES6+, CSS3, HTML5, SQL
                        <span>{<br/>}</span>
                    Applications: Github
                        <span>{<br/>}</span>
                    Libraries: jQuery, Bootstrap, Foundation6
                        <span>{<br/>}</span>
                    Tools: Express, React, Node
                </p>
            </div>
            <div class="col-lg-5 col-sm-12 order-2 text-center">
                <h2 class="current">Current Projects:</h2>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Book Search Engine</h5>
                        <p class="card-text">A full-stack application that allows users to search for and save books using Google Books API.</p>
                        <ul class="technologies">
                            <li class="tech-used">React</li>
                            <li class="tech-used">GraphQL</li>
                            <li class="tech-used">Google API</li>
                            <li class="tech-used">MongoDB</li>
                            <li class="tech-used">Express.js</li>
                            <li class="tech-used">Node.js</li>
                        </ul>
                        <div id="repoLinks" class="row d-flex justify-content-between">
                        <div class="col-sm text-center">
                                <a href="www.google.com" target="_blank"><button type="button" class="repo-btn">Website</button></a>
                            </div>
                            <div class="col-sm text-center">
                                <a href="www.google.com" target="_blank"><button type="button" class="repo-btn">Github</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
       
    </div>
  );
}



