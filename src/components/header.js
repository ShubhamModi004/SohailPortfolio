import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link  } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="header container">
    <div class="logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div class="header-links">
      <Link to="/">WORK</Link>
      <Link to="/">ABOUT</Link>
      <Link to="/">PROCESS</Link>
      <Link className="blck" to="/">GET IN TOUCH</Link>
    </div>
  </header>
)


const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
