import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer'
import About from './pages/About'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/portfolioContainer.css';


export default function PortfolioContainer() {
    // setting currentPage default to the 'About' page.
    const [currentPage, setCurrentPage] = useState('About');

    // this checks to see what the currentPage is, and renders to corresponding components.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    }

    // this function takes the data (page) and passes it into the setCurrentPage to update state.
    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div className="page-container">
             {/* we pass currentPage to set state (About) in Navigation.js and handlePageChange to update it */}
             <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className="content-wrap">
                {/* passing this to return the corresponding components */}
                {renderPage()}
            </div>
            <Footer />
        </div>
    )

}