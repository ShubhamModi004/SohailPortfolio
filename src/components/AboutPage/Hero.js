import React from 'react'
import "./Hero.css"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div className="heroAbout">
            <div className="container heroSection">
                <div>
                    <div className="mainTagContainer">
                        <Fade bottom duration={1200} >
                            <p className="mainTag">A little more</p>
                        </Fade>
                        <Fade bottom duration={1400}>
                            <p className="mainTag"> about me </p>
                        </Fade>
                    </div>
                    <Fade delay={1500}><h4 className="tagline" style={{ marginTop: '1.8rem' }}>What's me minus design <br/>equal to?</h4></Fade>
                </div>
            </div>
        </div>
    )
}





export default Hero;
