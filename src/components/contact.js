import React from 'react';
import '../App.css';
import { Facebook, Twitter,Instagram } from '@material-ui/icons';

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
                            <span className="material-icons">home</span>
                            <h5>
                              R & k Complex: ShivaNagar Colony Bardaghat -4, Nawalparasi, Nepal
                            </h5>
                        </div>
                        <div className="phone">
                            <span className="material-icons">phone</span>
                            <h5>
                            +977- 984634343
                            </h5>
                        </div>
                        <div className="email">
                            <span className="material-icons">email</span>
                            <h5>
                                uday.adhikari2@gmail.com
                            </h5>
                        </div>
                    </div>
                    
                </div>
                 <div className="socialMedia">
                        <h4>
                            Through Social-Media....
                    </h4>
                        <div className="social animate__animated animate__fadeInDown">
                        <Facebook className="fb media"></Facebook>
                        <Twitter className="twitter media"></Twitter>
                        <Instagram className="insta media"></Instagram>
                        </div>
                    </div>
            </header>
        </div>


    );
}

export default Contact;
