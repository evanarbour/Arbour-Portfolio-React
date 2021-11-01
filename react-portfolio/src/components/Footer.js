import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function Footer () {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row text-center">
                    <div class="col-sm-12">
                        <h3>Stay In Touch</h3>
                        <ul class="list-unstyled">
                            <li>
                                <a href="mailto:evan.arbour@gmail.com"><BsEnvelope /></a>
                                <a href="www.github.com"><BsGithub /></a>
                                <a href="www.linkedin.com"><BsLinkedin /></a>
                                <a href="www.instagram.com"><BsInstagram /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </footer>
    );

}

export default Footer;