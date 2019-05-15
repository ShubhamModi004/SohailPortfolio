import React from 'react'
import "./About.css"
import { FaSortUp } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div className="about-process">
            <div className="container">
                <Fade bottom delay={800}>
                    <h5 className="aboutHeader col-md-6">Humanizing the experience of digital products
                    by creating seamless & intuitive designs.
                </h5>
                </Fade>
            </div>
        </div>
    )
}


