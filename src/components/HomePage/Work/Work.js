import React from 'react'
import "./Work.css"
import { FaLongArrowAltRight } from 'react-icons/fa';


import Product from './Product';
import Rent from './Rent';
import Destination from './Destination';


export default function Work() {
    return (
        <div className="Work">
            <div className="container">
                <div className="workSection">
                    <h4 className="workHeader mb-4">Some of my select work</h4>
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
                            <h5>Marzipan Chocolates</h5> 
                            <p>Packaging</p>
                            <div className="btnRead">
                                <div className="btnW d-flex"><p class="read">READ CASE </p><FaLongArrowAltRight className="arrowColor"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row products reverse">
                    <div class="col-md-4">
                        <div className="productDescription text-right">
                            <h5>Ride - Luxury Car Rental</h5>
                            <p>Branding - Website - Mobile App</p>
                            <div className="btnRead rightAlign">
                                <div className="btnW d-flex"><p class="read">READ CASE </p><FaLongArrowAltRight className="arrowColor" /></div>
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
                            <h5>Destination X</h5>
                            <p>Travel - Website - App - Branding</p>
                            <div className="btnRead">
                                <div className="btnW d-flex"><p class="read">READ CASE </p><FaLongArrowAltRight className="arrowColor" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Explore d-flex">
                    <h4>Want to explore all my projects?</h4>
                    <div className="btnRead">
                        <div className="btn d-flex"><p class="read">View All </p><FaLongArrowAltRight className="arrowColor" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

