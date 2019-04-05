import React from 'react'
import "./Work.css"
import { FaLongArrowAltRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import Product from './Product';
import Rent from './Rent';
import Destination from './Destination';


export default function Work() {
    return (
        <div className="Work">
            <div className="container">
                <div className="workSection">
                    <Fade ><h4 className="workHeader mb-4">Some of my select work</h4></Fade>
                </div>
                <div class="row products">
                    <div class="col-md-4">
                        <div className="product">
                            <Product/>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div class="col-md-4">
                        <div className="productDescription">
                            <Fade delay={800}><h5>Marzipan Chocolates</h5></Fade> 
                            <Fade delay={1000}><p>Packaging</p></Fade>
                            <div className="btnRead">
                                <Fade delay={1000}><div className="btnW d-flex"><p class="read">READ CASE </p><FaLongArrowAltRight className="arrowColor"/></div></Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row products reverse">
                    <div class="col-md-4">
                        <div className="productDescription text-right">
                            <Fade delay={800}><h5>Ride - Luxury Car Rental</h5></Fade>
                            <Fade delay={1000}><p>Branding - Website - Mobile App</p></Fade>
                            <div className="btnRead rightAlign">
                                <Fade delay={1000}><div className="btnW d-flex"><p class="read">READ CASE </p><FaLongArrowAltRight className="arrowColor" /></div></Fade>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div class="col-md-4">
                        <div className="product d-flex rightImage">
                            <Rent />
                        </div>
                    </div>
                    
                </div>
                <div class="row products">
                    <div class="col-md-4">
                        <div className="destination">
                            <Destination />
                        </div>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div class="col-md-4">
                        <div className="productDescription">
                            <Fade delay={800}><h5>Destination X</h5></Fade>
                            <Fade delay={1000}> <p>Travel - Website - App - Branding</p></Fade>
                            <div className="btnRead">
                                <Fade delay={1000}><div className="btnW d-flex"><p class="read">READ CASE </p><FaLongArrowAltRight className="arrowColor" /></div></Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Explore d-flex">
                    <Fade bottom delay={1200}><h4>Want to explore all my projects?</h4></Fade>
                    <div className="btnRead">
                        <Fade delay={1500}><div className="btn d-flex"><p class="read">View All </p><FaLongArrowAltRight className="arrowColor" /></div></Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

