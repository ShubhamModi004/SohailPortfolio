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
                    <div className="mainTagContainer">
                        <Fade bottom duration={1200} >
                            <p className="mainTag">Hey There,</p>
                        </Fade>
                        <Fade bottom duration={1400}>
                            <p className="mainTag"> I'm Sohail Mohammad </p>
                        </Fade>
                    </div>
                    
                    <Fade delay={1500}><h4 className="tagline" style={{marginTop: '1.8rem'}}>A Digital Designer from Bangalore, India.</h4></Fade>
                    <Fade delay={1500}><h4 className="tagline">Specialized in User Interface & User Experience Design</h4></Fade>

                    <div style={{ marginTop: '2rem'}}><Fade delay={1500}><Link className="button" style={{ background: '#F2F2F2'}} to="/">MY WORK</Link></Fade></div>
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
