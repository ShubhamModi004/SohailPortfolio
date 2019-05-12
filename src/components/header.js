import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link  } from "gatsby"

import './header.css';

const Header = ({ siteTitle }) => (
  <header class="header container">
      <div class="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {/* Desktop Menu */}
      <div class="header-links">
        <Link to="/">WORK</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/">PROCESS</Link>
        <Link className="blck" to="/">GET IN TOUCH</Link>
      </div>

      {/* Mobile Menu */}
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




