import React from 'react'
import "./Work.css"
import { FaAngleRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';


import Spintly from './Spintly';
import Mtrs from './Mtrs';
import DestinationX from './DestinationX';
import Digit88 from './Digit88';


export default function Work() {
    return (
        <div className="Work">
            <div className="container">
                <div className="workSection">
                    <Fade ><h5 className="workHeader mb-4">Recent Projects</h5></Fade>
                </div>
                <div class="row products">
                        <div className="col-md-6 col-12 product">
                        <a href="https://www.behance.net/gallery/80752135/Design-for-Home-Automation">
                            <Fade duration={1500}>
                                <Spintly/>
                            </Fade>
                            <div className="productDetails overflowHide">
                            <Fade cascade bottom>
                                <div>
                                    <h6>Spintly Home Automation</h6>
                                    <p>UI / UX - Mobile App</p>
                                </div>
                                <div>
                                    <h6 className="caseStudy">CASE STUDY<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}}/></h6>
                                </div>
                            </Fade>
                            </div>
                        </a>
                        </div>
                        <div className="col-md-6 col-12 product">
                        <a href="https://www.behance.net/gallery/80589003/MTRS-Navigation-Tracking">
                            <Fade duration={1500}>
                                <Mtrs />
                            </Fade>
                            <div className="productDetails overflowHide">
                            <Fade cascade bottom>
                                <div>
                                    <h6>MTRS</h6>
                                    <p>Watch UI/UX</p>
                                </div>
                                <div>
                                    <h6 className="caseStudy">CASE STUDY<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}} /></h6>
                                </div>
                            </Fade>
                            </div>
                        </a>
                        </div>
                        <div className="col-md-6 col-12 product">
                        <a href="https://www.behance.net/gallery/80675577/Destination-x-Travel-Community-App">
                            <Fade duration={1500}>
                                <DestinationX />
                            </Fade>
                            <div className="productDetails overflowHide">
                            <Fade cascade bottom>
                                <div>
                                    <h6>Destination X</h6>
                                    <p>UI / UX / Branding - Mobile App</p>
                                </div>
                                <div>
                                    <h6 className="caseStudy">CASE STUDY<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}} /></h6>
                                </div>
                            </Fade>
                            </div>
                        </a>
                        </div>
                        <div className="col-md-6 col-12 product">
                            <Fade duration={1500}>
                                <Digit88 />
                            </Fade>
                            <div className="productDetails overflowHide">
                            <Fade cascade bottom>
                                <div>
                                    <h6>DIGIT88</h6>
                                    <p>UI / UX - Website</p>
                                </div>
                                <div>
                                    <h6 className="caseStudy">COMING SOON<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}} /></h6>
                                </div>
                            </Fade>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

