import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import '../styles/Footer.css';

function Footer () {
    return (
        <footer class="footer">
                <div class="row text-center">
                    <div class="col-12">
                        <ul class="list-unstyled d-flex justify-content-around">
                            <li>
                                <a class="social" href="mailto:evan.arbour@gmail.com"><BsEnvelope /></a>
                            </li>
                            <li>
                                <a class="social" href="www.github.com/evanarbour"><BsGithub /></a>
                            </li>
                            <li>
                                <a class="social" href="www.linkedin.com/evanarbour"><BsLinkedin /></a>
                            </li>   
                            <li>
                                <a class="social" href="www.instagram.com/evanarbour"><BsInstagram /></a>
                            </li>
                        </ul>
                    </div>
                </div>
        </footer>
    );

}

export default Footer;