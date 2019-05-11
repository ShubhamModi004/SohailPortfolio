import React from 'react'
import "./footer.css"
import { FaSortUp } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';



export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <Fade bottom delay={800}><h5 className="footerHeader">Catch me where action happens</h5></Fade>
            </div>
            <div className="container">
                <Fade delay={900}>
                    <Link className="button" style={{ background: '#fff' }} to="/">MY PROCESS</Link>
                </Fade>
            </div>
            <div className="backgroundSection">
                {/* <Sohail /> */}
            </div>
        </div>
    )
}


