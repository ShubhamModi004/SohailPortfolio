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
            <div className="container" style={{ padding: 0 }}>
                <div className="servicesSection overflowHide">
                    <Fade bottom>
                        <h5 class="servicesHeader">Read what I have to say about design</h5>
                    </Fade>
                </div>
                <div className="blogContainer overflowHide">
                    <Fade bottom delay={1000}>
                        <a href="https://blog.prototypr.io/a-deeper-understanding-to-users-well-being-4da82452ad68">
                            <div className="">
                                <div className="cardBlog">
                                    <Design />
                                    <Fade distance={'20px'}>
                                        <br />
                                        <h7> READ <FaAngleRight /> </h7>
                                        <br />
                                    </Fade>
                                </div>
                            </div>
                        </a>
                    </Fade>
                    <Fade bottom delay={1200}>
                        <div className="">
                            <div className="cardBlog">
                                <UiUx />
                                <Fade distance={'20px'}>
                                    <h6 className="blogTitle">THE UX FLOW</h6>
                                    <br />
                                    <h7> READ <FaAngleRight /> </h7>
                                    <br />
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={1400}>
                        <div className="">
                            <div className="cardBlog">
                                <Principle />
                                <Fade distance={'20px'}>
                                    <h6 className="blogTitle">PRINCIPLES OF DESIGN</h6>
                                    <br />
                                    <h7> READ <FaAngleRight /> </h7>
                                    <br />
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

