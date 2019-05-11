import React from 'react'
import "./footer.css"
import { FaSortUp } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
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
                        <Link to="/"><img src={require('../images/Dribble.png')}/></Link>
                        <Link to="/"><img src={require('../images/Instagram.png')} /></Link>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="footerBottom container">
                <div className="footerContent">
                    <h4>Let's get you up that ladder</h4>
                    <Link className="blck" to="/">GET IN TOUCH</Link>
                </div>
                <div className="calltoActions">
                    <Link>lifeofpixels0707@gmail.com</Link>
                    <Link>+91 81975 58162</Link>
                </div>
            </div>
        </div>
    )
}


