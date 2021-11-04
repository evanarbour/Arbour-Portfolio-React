import React from 'react';
import '../../styles/About.css'
import Photo from '../../assets/images/Evan-image.jpg'
import { BsIntersect} from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

export default function About() {
  return (
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-7 col-sm-12 text-center order-1">
                <h1>
                    Evan Arbour
                </h1>
                <h3>
                    Performance Strength Coach turned Developer 
                    from Seattle, WA.
                </h3>
                <p>
                    I am completing a Full-Stack Web Developer program through the University of Washington with skills in CSS, HTML,
                    JavaScript, and various back-end programs. I am most passionate about the UI/UX design of web applications
                    - the mixture of creative vision and technical skills.
                </p>
                <span>{<br/>}</span>
                <p>
                    After college, I started my fitness career in NYC and then moved to Seattle in 2017. I use my Five Core Values
                    as a way to navigate decisions from small to big and everything between. They are a central part to who I am; they help
                    me be a better coach, developer, partner, friend, son.
                </p>
                <span>{<br/>}</span>
            </div>
            <div class="col-lg-5 col-sm-4 order-2">
                <img src={Photo} alt="evan" id="evan-photo"></img>
            </div>
        </div>
        <div class="row justify-content-around">
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card rounded">
                    <div class="card-body text-center">
                        <h5 class="card-title">Belonging</h5>
                        <div class="icon-container">
                            <i><BsIntersect /></i>
                        </div>
                        <p class="card-text">Create space that allows everyone to be completely themselves. </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card rounded">
                    <div class="card-body text-center">
                        <h5 class="card-title ">Authenticity</h5>
                        <div class="icon-container">
                            <i><BsCheck2Square /></i>
                        </div>
                        <p class="card-text">True to personality, values and spirit. Honest with self and others.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card rounded">
                    <div class="card-body text-center">
                        <h5 class="card-title">Service</h5>
                        <div class="icon-container">
                            <i><BsPeople /></i>
                        </div>
                        <p class="card-text">Engage in the present moment and offer help to those who need it.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card rounded">
                    <div class="card-body text-center">
                        <h5 class="card-title">Leadership</h5>
                        <div class="icon-container">
                            <i><BsLightbulb /></i>
                        </div>
                        <p class="card-text">Mobilize the potential of others. Strive to be someone worth following.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card rounded">
                    <div class="card-body text-center">
                        <h5 class="card-title">Hard Work</h5>
                        <div class="icon-container">
                            <i><BsAward /></i>
                        </div>
                        <p class="card-text">Execute the discpline and decisions that render the best results.</p>
                    </div>
                </div>
            </div>
        </div>
        
       
      
    </div>
  );
}
