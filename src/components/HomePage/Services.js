import React from 'react'
import "./Services.css"
import { FaLongArrowAltRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import Brand from './Brand';
import Consultation from './Consultation';
import UX from './UX';


export default function Services() {
    return (
        <div className="Services">
            <div className="container servicesSection">
                <Fade bottom><h5 class="servicesHeader">What value I could provide you for your business</h5></Fade>
            </div>
            <div className="container servicesSection">
                <div className="row">
                    <div className="col-md-4">
                        <div className="serviceIconBR">
                        <Fade bottom delay={600}><Brand/></Fade>
                        </div>
                        <div className="d-flex">
                            <Fade bottom duration={800}>
                                <h5 className="py-4 header">Brand </h5>
                            </Fade>
                            <Fade bottom duration={1200}>
                                <h5 className="py-4 header">Identity</h5>
                            </Fade>
                        </div>
                        <Fade delay={1800}><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Fade>
                        <Fade delay={1800}>
                        <div className="py-1">
                            <div className="Article">
                            <a href="#">
                                View this article
                                <FaLongArrowAltRight className="arrowColor articleArrow" />
                            </a>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-md-4">
                        <div className="serviceIconUX">
                        <Fade bottom delay={600}><UX /></Fade>
                        </div>
                        <div className="d-flex">
                            <Fade bottom duration={800}>
                                <h5 className="py-4 header">User </h5>
                            </Fade>
                            <Fade bottom duration={1000}>
                                <h5 className="py-4 header">Experience</h5>
                            </Fade>
                            <Fade bottom duration={1200}>
                                <h5 className="py-4 header">&</h5>
                            </Fade>
                            <Fade bottom duration={1400}>
                                <h5 className="py-4 header">Interface</h5>
                            </Fade>
                        </div>
                        <Fade delay={1800}><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Fade>                        
                        <Fade delay={1800}>
                        <div className="py-1">
                            <div className="Article">
                            <a href="#">
                                View this article
                                <FaLongArrowAltRight className="arrowColor articleArrow" />
                            </a>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-md-4">
                        <div className="serviceIconCO">
                        <Fade bottom delay={600}><Consultation /></Fade>
                        </div>
                        <Fade bottom duration={800}><h5 className="py-4">Consultation</h5></Fade>
                        <Fade delay={1800}><p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Fade>                        
                        <Fade delay={1800}>
                        <div className="py-1">
                            <div className="Article">
                            <a href="#">
                                View this article
                                <FaLongArrowAltRight className="arrowColor articleArrow" />
                            </a>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

