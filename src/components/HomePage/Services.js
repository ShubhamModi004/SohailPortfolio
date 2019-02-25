import React from 'react'
import "./Services.css"
import { FaLongArrowAltRight } from 'react-icons/fa';


import Brand from './Brand';
import Consultation from './Consultation';
import UX from './UX';


export default function Services() {
    return (
        <div className="Services">
            <div className="container servicesSection">
                <h5 class="servicesHeader">What value I could provide you for your business</h5>
            </div>
            <div className="container servicesSection">
                <div className="row">
                    <div className="col-md-4">
                        <div className="serviceIconBR">
                        <Brand/>
                        </div>
                        <h5 className="py-4">Brand Identity</h5>
                        <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="py-1">
                            <div className="Article">
                            <a href="#">
                                View this article
                                <FaLongArrowAltRight class="articleArrow"/>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="serviceIconUX">
                        <UX />
                        </div>
                        <h5 className="py-4">User Experience & Interface</h5>
                        <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                        
                        <div className="py-1">
                            <div className="Article">
                            <a href="#">
                                View this article
                                <FaLongArrowAltRight class="articleArrow" />
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="serviceIconCO">
                        <Consultation />
                        </div>
                        <h5 className="py-4">Consultation</h5>
                        <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                        
                        <div className="py-1">
                            <div className="Article">
                            <a href="#">
                                View this article
                                <FaLongArrowAltRight className="articleArrow" />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

