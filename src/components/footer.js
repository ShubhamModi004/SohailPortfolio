import React, { Component } from 'react'
import "./footer.css"
import Fade from 'react-reveal/Fade';

class Footer extends Component {

    state = {
        contactForm: false
    };

    toggleContactForm = () => {
        const { contactForm } = this.state;

        this.setState({
            contactForm: !contactForm
        });
        console.log(contactForm);
    };

    renderContactForm() {
        const { contactForm } = this.state;
        return (
            <div>
                {contactForm ?
                    <div>
                        <Fade >
                            <div className="contactform">
                                <div className="contactform-container">
                                    <div className="container">
                                        <div class="cross cross--big" onClick={this.toggleContactForm}><span class="cross__icon"></span></div>
                                        <h2>Let's connect</h2>
                                        <form className="form-blck" action="https://formspree.io/lifeofpixels0707@gmail.com" method="POST">
                                            <input className="email" type="email" id="fname" name="email" placeholder="Email" />
                                            <textarea className="message" placeholder="Message" />
                                            <input type="submit" value="Submit" className="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="offset" onClick={this.toggleContactForm}>

                            </div>
                        </Fade>
                    </div>
                    : null
                }
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.renderContactForm()}
                <div className="footer">
                    <div className="container">
                        <Fade bottom delay={300}><h5 className="footerHeader">Catch me where action happens</h5></Fade>
                    </div>
                    <div className="container">
                        <Fade delay={400}>
                            <div className="socialLinks">
                                <a href="https://dribbble.com/sohail_minimalist"><img src={require('../images/Dribble.png')} /></a>
                                <a href="https://www.instagram.com/sohail_minimalist/"><img src={require('../images/Instagram.png')} /></a>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="footerBottom container">
                    <div className="footerContent">
                        <h4>Let's get you up that ladder</h4>
                        <a className="blck" onClick={this.toggleContactForm}>GET IN TOUCH</a>
                    </div>
                    <div className="calltoActions">
                        <a>lifeofpixels0707@gmail.com</a>
                        <a href="tel:+918197558162">+91 81975 58162</a>
                    </div>
                </div>
                <div className="footer-madeBy">
                    <p>Developed by <a href="https://github.com/ShubhamModi004"> Shubham Modi</a></p>
                </div>

            </div>
        )
    }
}

export default Footer;


