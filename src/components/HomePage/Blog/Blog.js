import React from 'react'
import "./Blog.css"
import { FaAngleRight } from 'react-icons/fa';

import Design from './Design';
import UiUx from './UiUx';
import Principle from './Principle';


export default function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <div className="servicesSection">
                    <h5 class="servicesHeader">Read what I have to say about design</h5>
                </div>
                <div className="row blogContainer">
                    <div className="col-md-4 col-12">
                        <div className="cardBlog">
                            <Design/>
                            <h6 className="blogTitle">THE ROAD TO GOOD DESIGN</h6>
                            <br/>
                            <h7> READ <FaAngleRight /> </h7>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="cardBlog">
                            <UiUx/>
                            <h6 className="blogTitle">THE UiUx FLOW</h6>
                            <br/>
                            <h7> READ <FaAngleRight /> </h7>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="cardBlog">
                            <Principle/>
                            <h6 className="blogTitle">PRINCIPLES OF DESIGN</h6>
                            <br/>
                            <h7> READ <FaAngleRight/> </h7>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

