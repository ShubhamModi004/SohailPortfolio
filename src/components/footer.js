import React from 'react'
import "./footer.css"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <Fade bottom delay={800}><h5 className="footerHeader">Catch me where action happens</h5></Fade>
                </div>
                <div className="container">
                    <Fade delay={900}>
                        <div className="socialLinks">
                            <a href="https://dribbble.com/sohail_minimalist"><img src={require('../images/Dribble.png')}/></a>
                            <a href="https://www.instagram.com/sohail_minimalist/"><img src={require('../images/Instagram.png')} /></a>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="footerBottom container">
                <div className="footerContent">
                    <h4>Let's get you up that ladder</h4>
                    <a className="blck" href="mailto:Lifeofpixels0707@gmail.com">GET IN TOUCH</a>
                </div>
                <div className="calltoActions">
                    <Link>lifeofpixels0707@gmail.com</Link>
                    <Link>+91 81975 58162</Link>
                </div>
            </div>
            <div className="footer-madeBy">
                <p>Developed by <a href="https://github.com/ShubhamModi004"> Shubham Modi</a></p>
            </div>
        </div>
    )
}


