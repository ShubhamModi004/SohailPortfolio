import React from 'react'
import "./Blog.css"
import { FaLongArrowAltRight } from 'react-icons/fa';

import Breed from './Breed';
import Design from './Design';
import Process from './Process';


export default function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-5">
                        <div className="servicesSection">
                            <h4 class="servicesHeader">I love aspiring new designers</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-md-2"> </div>
                    <div className="col-md-5 blogSectionQuote">
                        <div className="servicesSection">
                            <h4 class="servicesHeader">Throw out that instrumental design <br/> language and speak like language.</h4>
                        </div>
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
                <div className="bottomLine">
                </div>
                <div className="servicesSection">
                    <h4 class="servicesHeader">Get more insight on my design thinking</h4>
                </div>
                <div className="servicesSection"></div>
                <div className="row text-white">
                    <div className="col-md-4 my-2">
                        <div className="cardBlog">
                            <Breed/>
                            <h6>Breed of Logos</h6>
                            <div className="cardLink">
                                <a href="#">
                                    Read
                                <FaLongArrowAltRight className="articleArrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2"> 
                        <div className="cardBlog">
                            <Design />
                            <h6>Design Systems</h6>
                            <div className="cardLink">
                                <a href="#">
                                    Read
                                <FaLongArrowAltRight className="articleArrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="cardBlog">
                            <Process />
                            <h6>My Design Process</h6>
                            <div className="cardLink">
                                <a href="#">
                                    Read
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

