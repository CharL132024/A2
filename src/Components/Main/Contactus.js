import React from 'react';
import Button from './Button2';

const ContactUs = () => {
    return (
        <div className="ContactUs" style={{backgroundColor:"rgba(255, 182, 193, 0.504)", color:"black", border:"2px solid black"}}>
            <h2>Contact Us</h2>
            <form method="post">
                <label for="firstname">First Name</label>
                <input type="text" title="firstname" placeholder="Enter your first name"/><br/>
                <label for="lastname">Last Name</label>
                <input type="text" title="lastname" placeholder="Enter your last name"/><br/>
                <label for="email">Email</label>
                <input type="email" title="email" placeholder="Enter your email"/><br/>
                <label for="photo">Send us a photo!</label><br/>
                <input type="file" name="photo"/><br/>
                <textarea rows="5" cols="40" placeholder="Enter your message"></textarea>
                <input type="checkbox" name="newsletter" checked/><br/>
                <Button/>
            </form>
        </div>
    );
};

export default ContactUs;
