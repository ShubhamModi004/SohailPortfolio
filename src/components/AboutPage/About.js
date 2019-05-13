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
                    <h5 className="aboutHeader">Born & raised in Goa, a holiday destination.
                    <br/>My life has been full of adventures, beaches, good food & great people.
                    </h5>
                </Fade>
            </div>
            <div className="container">
                <Fade delay={900}>
                    <div className="row">
                        <div className="col-md-3 col-6 fields">
                            <h1>32</h1>
                            <p>BIKE RIDES</p>
                        </div>
                        <div className="col-md-3 col-6 fields">
                            <h1>11</h1>
                            <p>CINEMATIC VIDEOS</p>
                        </div>
                        <div className="col-md-3 col-6 fields">
                            <h1>23</h1>
                            <p>DANCE SHOWS</p>
                        </div>
                        <div className="col-md-3 col-6 fields">
                            <h1>80+</h1>
                            <p>GAMING TOURNAMENTS</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="container">
                <Fade delay={900}>
                    <Link className="button" style={{ background: '#fff' }} to="/">ABOUT ME</Link>
                </Fade>
            </div>
        </div>
    )
}


