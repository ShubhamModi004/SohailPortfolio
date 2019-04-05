import React from 'react'
import "./Hero.css"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return (
        <div className="hero">
            <div className="backgroundImage">
                <Image />
            </div>
            <div className="container heroSection">
                <div>
                    <div className="d-flex">
                        <Fade bottom duration={800} >
                            <h2 className="header">Sohail</h2>
                        </Fade>
                        <Fade bottom duration={1400}>
                            <h2> Mohammad </h2>
                        </Fade>
                    </div>
                    
                    <Fade delay={1900}><p className="tagline">Human Experience designer</p></Fade>

                    <Fade delay={1900}><button className="getinTouch"><Link to="/contact">GET IN TOUCH</Link></button></Fade>
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
