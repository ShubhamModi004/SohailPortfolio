import React from 'react'
import "./ProcessWorks.css"
import { FaSortUp } from 'react-icons/fa';
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';

// importing images
import Goals from './Goals';
import Marketstudy from './Marketstudy';
import Users from './Users';
import Documenting from './Documenting';
import Structuring from './Structuring';
import Information from './Information';
import Userjourneys from './Userjourneys';
import Wireframing from './Wireframing';
import Iteration from './Iteration';
import Visualinteraction from './Visualinteraction';
import DesignLanguage from './DesignLanguage';
import Prototyping from './Prototyping';
import Translate from './Translate';
import Testing from './Testing';
import Improvement from './Improvement';

export default function ProcessWorks() {
    return (
        <div className="processWorks">
            <div className="container">
                <Fade bottom delay={300}>
                    <h5 className="aboutHeader">The process that works the best for me</h5>
                </Fade>
                <div>
                    <Fade cascade delay={400}>
                        {/* 1 */}
                        <div className="process-works-container">
                            <div className="d-flex">
                                <h5 className="aboutHeader">01.</h5>
                                <h5 className="aboutHeader paddingFix">Absorb</h5>
                            </div>
                            <div className="overflowHide row process-works">
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Goals />
                                    </div>
                                    <h6>Business Goals</h6>
                                    <p>Understanding the idea, vision and objectives.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Marketstudy />
                                    </div>
                                    <h6>Market Study</h6>
                                    <p>Exploring the current market trends.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Users />
                                    </div>
                                    <h6>Users</h6>
                                    <p>Finding out more about the target audience.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* 2 */}
                    <Fade cascade delay={400}>
                        <div className="process-works-container">
                            <div className="d-flex">
                                <h5 className="aboutHeader">02.</h5>
                                <h5 className="aboutHeader paddingFix">Demystify</h5>
                            </div>
                            <div className="overflowHide row process-works">
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Documenting />
                                    </div>
                                    <h6>Documenting</h6>
                                    <p>Jotting down my observations & requirements.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Structuring />
                                    </div>
                                    <h6>Structuring</h6>
                                    <p>Laying out the road-map & milestones.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Information />
                                    </div>
                                    <h6>Information Architecture</h6>
                                    <p>Defining flows and navigation.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* 3 */}
                    <Fade cascade delay={400}>
                        <div className="process-works-container">
                            <div className="d-flex">
                                <h5 className="aboutHeader">03.</h5>
                                <h5 className="aboutHeader paddingFix">Draft</h5>
                            </div>
                            <div className="overflowHide row process-works">
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Userjourneys />
                                    </div>
                                    <h6>User Journeys</h6>
                                    <p>Considering all the moves on the chess board.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Wireframing />
                                    </div>
                                    <h6>Wireframing</h6>
                                    <p>The first rough draft of the layout & content.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Iteration />
                                    </div>
                                    <h6>Iteration, Iteration & Iteration.</h6>
                                    <p>Finding perfection in the foundation.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* 4 */}
                    <Fade cascade delay={400}>
                        <div className="process-works-container">
                            <div className="d-flex">
                                <h5 className="aboutHeader">04.</h5>
                                <h5 className="aboutHeader paddingFix">Craft</h5>
                            </div>
                            <div className="overflowHide row process-works">
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <DesignLanguage />
                                    </div>
                                    <h6>Design Language & Moodboards</h6>
                                    <p>Setting up guidelines for everything visual.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Visualinteraction />
                                    </div>
                                    <h6>Visual & Interaction Design</h6>
                                    <p>Crafting beautiful interfaces that feels alive.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Prototyping />
                                    </div>
                                    <h6>Prototyping</h6>
                                    <p>Creating functional prototypes to get the feel.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* 5 */}
                    <Fade cascade delay={400}>
                        <div className="process-works-container">
                            <div className="d-flex">
                                <h5 className="aboutHeader">05.</h5>
                                <h5 className="aboutHeader paddingFix">Nurture</h5>
                            </div>
                            <div className="overflowHide row process-works">
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Translate />
                                    </div>
                                    <h6>Translate</h6>
                                    <p>Help developers bring my designs to life.</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Testing />
                                    </div>
                                    <h6>Testing & Feedbacks</h6>
                                    <p>Because who better than the actual users?</p>
                                </div>
                                <div className="col-md-4 process-works-details">
                                    <div className="process-works-image">
                                        <Improvement />
                                    </div>
                                    <h6>Improvements</h6>
                                    <p>Going back to the drawing board.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}


