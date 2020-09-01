import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div className="Contact">
            <header className="Contact-header">
                <h1>Contact Us
            </h1>
                <div className="contactContainer">
                    <div className="formContainer">
                        <h4>
                            Have Some Question ?
                    </h4>
                        <form>
                            <div className="MessageInput">
                                <textarea type="textarea" name="message" placeholder="Your Message" />
                            </div>
                            <div className="EmailInput">
                                <input type="email" placeholder="Valid Email" name="" />
                            </div>
                            <div className="btn btn-danger sendButton">send</div>
                        </form>
                    </div>
                    <div className="reachToUs">
                        <h4>
                            You also can reach to us...
                    </h4>
                        <div className="Address">
                            <span class="material-icons">home</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>


    );
}

export default Contact;
