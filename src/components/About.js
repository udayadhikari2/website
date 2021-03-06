import React from 'react';
import '../App.css';

function About() {
    return (
        <div className="About">
            <header className="About-header">
                <h1>About Us
            </h1>
                <div className="AboutBody">
                    <div className="AboutLogo animate__animated animate__fadeInLeft">
                        <img src="../abouts.png" alt="" />
                    </div>
                    <div className="AboutDiscription">
                        <p>
                            We gear our methodology to our customers’ specific needs, creating a unique service experience for them. This personalized approach helps us to achieve more sustainable results within a shorter timeframe.
                            As our name suggests, we are all about people and technology. We work hard to attract and keep the best people and also to select innovative products. We offer a wide variety of services, ranging from analysis and implementation, to integration and custom development.
                    </p>
                        <div className="TeamCredits">
                            <h2>Credits
                            </h2>
                            <div className="team animate__animated animate__fadeInDown">
                                <div className="Uday">
                                    <img src="../Uday.png" alt=""/>
                                    <p>
                                        <span>Uday Adhikari</span><br/>
                                        Computer Engineer <br/>
                                        Web Developer
                                    </p>
                                </div>
                                <div className="verticalLine">
                                </div>
                                <div className="Aashish">
                                <p>
                                <span>Aashish Rana Magar</span><br/>
                                        Computer Engineer <br/>
                                        Web Developer
                                    </p>
                                    <img src="../aashish.png" alt=""/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default About;
