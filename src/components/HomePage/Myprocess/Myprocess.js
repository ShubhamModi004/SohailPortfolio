import React from 'react'
import "./Myprocess.css"
import { FaSortUp } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import Sohail from './Sohail';

export default function Myprocess() {
    return (
        <div className="myprocess">
            <div className="container">
                <Fade bottom delay={800}><h5 className="aboutHeader">Get inside my mind,<br/>
                know my design process</h5></Fade>
            </div>
            <div className="container">
                <Fade delay={900}>
                    <Link className="button" style={{ background: '#fff' }} to="/">MY PROCESS</Link>
                </Fade>
            </div>
            <div className="backgroundSection">
                <Sohail />
            </div>
        </div>
    )
}


