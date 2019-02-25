import React from 'react'
import "./Footer.css"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";


const Footer = () => {
    return (
        <div className="footer d-flex">
            <div className="backgroundImageFooter">
                <Image />
            </div>
            <div className="container footerContent">
                <div>
                    <h1>Lets get you up that ladder</h1>
                    <button className="getinTouch">GET IN TOUCH</button>
                </div>
            </div>
        </div>
    )
}


const Image = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "footer.png" }) {
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



export default Footer;
