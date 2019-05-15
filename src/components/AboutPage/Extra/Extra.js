import React from 'react'
import { Link } from "gatsby"
import "./Extra.css"

import Fade from 'react-reveal/Fade';


const Extra = () => {
    return (
        <div className="heroExtra">
            <div className="container heroSection">
                <div>
                    <Fade delay={800}>
                        <h5 className="aboutHeader">Apart from all that, I help people learn basics of design & have volunteered in making 3 websites for Non-Profit Organizations to help feed the poor, educate the needy & help improving the climate.
                        <br /><br/><br/>If you're interested in learning how to design or help save the world, you could hit me up anytime.
                        </h5>
                    </Fade>
                    <div style={{ marginTop: '2rem' }}><Fade delay={1500}><Link className="button" style={{ background: '#F2F2F2' }} to="/">REACH OUT</Link></Fade></div>
                </div>
            </div>
        </div>
    )
}



export default Extra;
