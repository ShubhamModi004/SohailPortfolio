import React from 'react'
import "./Blog.css"
import { FaAngleRight } from 'react-icons/fa';

import Design from './Design';
import UiUx from './UiUx';
import Principle from './Principle';

import Fade from 'react-reveal/Fade';



export default function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <div className="servicesSection overflowHide">
                    <Fade bottom>
                        <h5 class="servicesHeader">Read what I have to say about design</h5>
                    </Fade>
                </div>
                <div className="row blogContainer overflowHide">
                    <Fade bottom delay={1000}>
                        <div className="col-md-4 col-12">
                            <div className="cardBlog">
                                <Design/>
                                <Fade  distance={'20px'}>
                                    <h6 className="blogTitle">THE ROAD TO GOOD DESIGN</h6>
                                    <br/>
                                    <h7> READ <FaAngleRight /> </h7>
                                    <br/>
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={1200}>
                        <div className="col-md-4 col-12">
                            <div className="cardBlog">
                                <UiUx/>
                                <Fade  distance={'20px'}>
                                <h6 className="blogTitle">THE Ux FLOW</h6>
                                <br/>
                                <h7> READ <FaAngleRight /> </h7>
                                <br/>
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={1400}>
                        <div className="col-md-4 col-12">
                            <div className="cardBlog">
                                <Principle/>
                                <Fade  distance={'20px'}>
                                    <h6 className="blogTitle">PRINCIPLES OF DESIGN</h6>
                                    <br/>
                                    <h7> READ <FaAngleRight/> </h7>
                                    <br/>
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

