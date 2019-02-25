import React from 'react'
import "./Hero.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";


const Hero = () => {
    return (
        <div className="hero">
            <div className="backgroundImage">
                <Image />
            </div>
            <div className="container heroSection">
                <div>
                    <h2>Sohail Mohammad</h2>
                    <p className="tagline">Human Experience designer</p>
                    <button className="getinTouch">GET IN TOUCH</button>
                </div>
                <div className="scrollSection">
                    <p className="scroll text-center">scroll</p>
                    <div className="line"></div>
                    <div className="circle d-flex">
                        <p>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Image = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "image1.png" }) {
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
