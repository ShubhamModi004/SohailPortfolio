import React from 'react'
import "./Work.css"
import { FaAngleRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';


import Spintly from './Spintly';
import Faceo from './Faceo';
import DestinationX from './DestinationX';
import Uniloq from './Uniloq';


export default function Work() {
    return (
        <div className="Work">
            <div className="container">
                <div className="workSection">
                    <Fade ><h5 className="workHeader mb-4">Recent Projects</h5></Fade>
                </div>
                <div class="row products">
                    <div className="col-md-6 col-12 product">
                        <Spintly/>
                        <div className="productDetails">
                            <div>
                                <h6>Spintly Home Automation</h6>
                                <p>UI / UX - Mobile App</p>
                            </div>
                            <div>
                                <h6>Case Study<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}}/></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 product">
                        <Faceo />
                        <div className="productDetails">
                            <div>
                                <h6>Faceo Skincare</h6>
                                <p>UI / UX / Branding - Website</p>
                            </div>
                            <div>
                                <h6>Case Study<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}} /></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 product">
                        <DestinationX />
                        <div className="productDetails">
                            <div>
                                <h6>Destination X</h6>
                                <p>UI / UX / Branding - Mobile App</p>
                            </div>
                            <div>
                                <h6>Case Study<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}} /></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 product">
                        <Uniloq />
                        <div className="productDetails">
                            <div>
                                <h6>Uniloq</h6>
                                <p>UI / UX - Website</p>
                            </div>
                            <div>
                                <h6>Case Study<FaAngleRight color={'#707070'} size={8} style={{ marginLeft: '0.5rem'}} /></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

