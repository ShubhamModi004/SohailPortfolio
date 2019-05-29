import React from 'react'
import "./About.css"
import { FaSortUp } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <Fade bottom delay={800}>
                    <h5 className="aboutHeader col-md-6">Humanizing the experience of digital products
                    by creating seamless & intuitive designs.
                </h5>
                </Fade>
            </div>
            <div className="container">
                <Fade delay={900}>
                    <div className="row">
                        <div className="col-md-3 col-6 fields">
                            <h1>60+</h1>
                            <p>CLIENTS</p>
                        </div>
                        <div className="col-md-3 col-6 fields">
                            <h1>5+</h1>
                            <p>EXPERIENCE</p>
                        </div>
                        <div className="col-md-3 col-6 fields">
                            <h1>2,535</h1>
                            <p>CUP OF COFFEE</p>
                        </div>
                        <div className="col-md-3 col-6 fields rotatedField">
                            <h1 className="rotate">8</h1>
                            <p>LOVE FOR DESIGNS</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="container">
                <Fade delay={900}>
                    <Link className="button" style={{ background: '#fff' }} to="/AboutPage">ABOUT ME</Link>
                </Fade>
            </div>
        </div>
    )
}


