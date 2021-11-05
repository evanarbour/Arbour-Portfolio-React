import React from 'react';
import '../styles/Navigation.css'

function Navigation ({ currentPage, handlePageChange}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" id="nav-name" href="#about">Evan Arbour</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#about" onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About Me
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >Portfolio
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resume" onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact" onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact
                        </a>
                    </li>
                </ul>        
                {/* <div class="navbar-nav">
                    <a class="nav-item" href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About Me
                    </a>
                    <a class="nav-item" href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >Portfolio
                    </a>
                    <a class="nav-item" href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume
                    </a>
                    <a class="nav-item" href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact
                    </a>
                </div> */}
            </div>
        </nav>
    );
}


export default Navigation;