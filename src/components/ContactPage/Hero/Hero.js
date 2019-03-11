import React from 'react'
import "./Hero.css"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";


const Hero = () => {
    return (
        <div className="Contacthero">
            <div className="backgroundImageContact">
                <Image />
            </div>
            <div className="container contact">
                <div>
                    <h2>Fill me in on a few details</h2>
                    <form action="https://formspree.io/shubhammodi004@gmail.com" method="POST" className="contactForm">
                        <div className="fields">
                            <input type="text" className="inputFields" name="name" id="name" placeholder="FULL NAME" />
                        </div>
                        <div className="fields">
                            <input type="email" className="inputFields" name="email" id="email" placeholder="EMAIL ID" />
                        </div>
                        <h5>What are you looking for?</h5>
                        <p className="options">You can select multiple options</p>
                        <div className="row">
                            <div className="col-md-5 col-sm-5 col-5">
                                <label className="inputFieldRadio">
                                    <input className="radioButton" type="radio" name="Website" id="Website" />
                                    <span>WEBSITE</span>
                                </label>
                            </div>
                            <div className="col-md-5 col-sm-5 col-5">
                                <label className="inputFieldRadio">
                                    <input className="radioButton" type="radio" name="Mobile_App" id="Mobile_App"/>
                                    <span>MOBILE APP</span>
                                </label>
                            </div>
                            <div className="col-md-5 col-sm-5 col-5">
                                <label className="inputFieldRadio">
                                    <input className="radioButton" type="radio" name="Product_Design" id="Product_Design" />
                                    <span>PRODUCT DESIGN</span>
                                </label>
                            </div>
                            <div className="col-md-5 col-sm-5 col-5">
                                <label className="inputFieldRadio">
                                    <input className="radioButton" type="radio" name="Branding" id="Branding" />
                                    <span>BRANDING</span>
                                </label>
                            </div>
                            <div className="col-md-5 col-sm-5 col-5">
                                <label className="inputFieldRadio">
                                    <input className="radioButton" type="radio" name="Consultation" id="Consultation" />
                                    <span>CONSULTATION</span>
                                </label>
                            </div>
                            <div className="col-md-5 col-sm-5 col-5">
                                <label className="inputFieldRadio">
                                    <input className="radioButton" type="radio" name="Design_Thinking_Program" id="Design_Thinking_Program"/>
                                    <span>DESIGN THINKING PROGRAM</span>
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="getinTouch">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


const Image = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "contactimage.png" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)



export default Hero;
