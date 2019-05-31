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
                    <Fade bottom delay={100}>
                        <a href="https://blog.prototypr.io/a-deeper-understanding-to-users-well-being-4da82452ad68" target="_blank">
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
                    <Fade bottom delay={300}>
                        <a href="https://medium.com/@lifeofpixels0707/a-b-testing-101-719d4a0c576b" target="_blank">
                            <div className="">
                                <div className="cardBlog">
                                    <UiUx />
                                    <Fade distance={'20px'}>
                                        <br />
                                        <h7> READ <FaAngleRight /> </h7>
                                        <br />
                                    </Fade>
                                </div>
                            </div>
                        </a>
                    </Fade>
                    <Fade bottom delay={500}>
                        <a href="https://medium.com/@lifeofpixels0707/understanding-whats-more-important-to-users-21c252b0efd4" target="_blank">
                            <div className="">
                                <div className="cardBlog">
                                    <Principle />
                                    <Fade distance={'20px'}>
                                        <br />
                                        <h7> READ <FaAngleRight /> </h7>
                                        <br />
                                    </Fade>
                                </div>
                            </div>
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

