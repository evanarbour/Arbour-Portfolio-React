import React, { useState } from 'react';
import '../../styles/Contact.css'

function Contact () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleInputChange = (e) => {

        const { name, value } = e.target;

        return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setFirstName();
        setLastName();
    }
    
    
    return (
        <div>
            <p>
                Hey {firstName}! Thanks for the message!
            </p>
            <form className="form">
                <input
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First Name"
                />
                <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
                />
                <button type="button" onClick={handleFormSubmit}>
                Submit
                </button>
            </form>
        </div>
      );
}


  
export default Contact;