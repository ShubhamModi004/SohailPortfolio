import React from 'react'
import "./Hero.css"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div className="hero">
            <div className="backgroundImage-process">
                <Image />
            </div>
            <div className="container heroSection">
                <div>
                    <div className="mainTagContainer">
                        <Fade bottom duration={1200} >
                            <p className="mainTag">How I treat</p>
                        </Fade>
                        <Fade bottom duration={1400}>
                            <p className="mainTag">your ideas as my own</p>
                        </Fade>
                    </div>

                    <Fade delay={1500}><h4 className="tagline" style={{ marginTop: '1.8rem' }}>"I strive for two things in design: simplicity and clarity.</h4></Fade>
                    <Fade delay={1500}><h4 className="tagline">Great design is born of those two things."</h4></Fade>
                </div>
            </div>
        </div>
    )
}


const Image = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "sohail3.png" }) {
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
