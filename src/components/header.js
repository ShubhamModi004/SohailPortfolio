import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link  } from "gatsby"

import './header.css';

const Header = ({ siteTitle }) => (
  <header className="header container">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="header-links">
        <Link to="/" activeClassName='active'>WORK</Link>
        <Link to="/AboutPage" activeClassName='active'>ABOUT</Link>
        <Link to="/ProcessPage" activeClassName='active'>PROCESS</Link>
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




