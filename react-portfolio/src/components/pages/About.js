import React from 'react';
import '../../styles/About.css'
import Photo from '../../assets/images/Evan-image.jpg'

export default function About() {
  return (
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="stylesheet col-8 text-center">
                <h1>
                    #evan-arbour &#123; <span>{<br/>}</span>
                    display: flex <span>{<br/>}</span>
                    &#125;
                </h1>
                <h3>
                    Evan is a Performance Strength Coach turned Developer 
                    from Seattle, WA.
                </h3>
                <p>
                    Hi! My name is Evan -- I grew up in
                    a small town in Maine where all my family still lives! After college, I started my fitness career
                    in NYC and then moved to Seattle in 2017.
                </p>
                <span>{<br/>}</span>
                <p>
                    I am completing a Full-Stack Web Developer program through the University of Washington with skills in CSS, HTML,
                    JavaScript, and various back-end programs. I am most passionate about the UI/UX design of web applications
                    - the mixture of creative vision and technical skills.
                </p>
            </div>
            <div class="col-4">
                <img src={Photo} alt="evan" id="evan-photo"></img>
            </div>
        </div>
        
       
      
    </div>
  );
}
