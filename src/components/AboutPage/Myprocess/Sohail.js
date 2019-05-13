import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Sohail = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Sohail2.png" }) {
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
export default Sohail
