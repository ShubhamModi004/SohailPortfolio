import React from 'react'
import "./Footer.css"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";

import Map from './Map';

export default function Footer() {
    return (
        <div className="contactFooter">
            <div className="container">
                <h1>Forms don't do justice to your idea?</h1>
                <p>Ping me or send me an email</p>
                <div className="links">
                    <a href="mailto:anushas.designer@gmail.com">
                        hello@sohail.work
                    </a>
                    <a href="tel:+91-819-7558-162">
                        +918197558162
                    </a>
                </div>
                <h3>I am always game for a coffee</h3>
            </div>      
            <div className="map">
                <Map />
                <div className="bangalore text-center d-flex">
                    <h6>BANGALORE</h6>
                    <div className="dot" />
                </div>
            </div>
        </div>
    )
}
