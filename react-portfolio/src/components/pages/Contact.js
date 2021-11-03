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
            <form>
                <div class="row">
                    <div class="form-group my-4 col-5">
                        <label for="firstNameInput">Enter First Name:</label>
                        <input 
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text" 
                        class="form-control" 
                        id="first-name-input" 
                        placeholder="First Name"/>
                    </div>    
                    <div class="form-group my-4 col-5">
                        <label for="lastNameInput">Enter Last Name:</label>
                        <input 
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        type="text" 
                        class="form-control" 
                        id="last-name-input" 
                        placeholder="Last Name"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group my-4 col-10">
                        <label for="emailInput">Email Address:</label>
                        <input 
                        name="lastName"
                        type="email" 
                        class="form-control" 
                        id="email-input" 
                        placeholder="Enter Email"/>
                    </div>    
                </div>  
                <div class="row">
                    <div class="input-group my-5 col-10">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Message:</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-secondary" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
      );
}


  
export default Contact;