import PropTypes from "prop-types"
import React, {Component} from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link  } from "gatsby"
import Fade from 'react-reveal/Fade';


import './header.css';


class Header extends Component{
  state={
    isActive: false
  }

  toggleHamburger = () => {
    const { isActive } = this.state
    this.setState({
      isActive: !isActive
    })
  }

  render(){
    const { isActive } = this.state
    return(
      <header className="header container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="desktop">
          <div className="header-links">
            <Link to="/" activeClassName='active'>WORK</Link>
            <Link to="/AboutPage" activeClassName='active'>ABOUT</Link>
            <Link to="/ProcessPage" activeClassName='active'>PROCESS</Link>
            <Link className="blck" to="/">GET IN TOUCH</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile">
        <section className="section" onClick={() => this.toggleHamburger()}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className={"hamburger hamburger--v1 js-toggle " + (isActive ? 'is-active' : '')}>
                  <div className="hamburger__bar "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {(isActive ?
          <Fade delay={100}>
          <div className="header-links-hamburger">
            <Link to="/" activeClassName='active'>WORK</Link>
            <Link to="/AboutPage" activeClassName='active'>ABOUT</Link>
            <Link to="/ProcessPage" activeClassName='active'>PROCESS</Link>
            <Link className="blck" to="/">GET IN TOUCH</Link>
          </div>
          </Fade>
        :
          <div/>
        )}
        </div>

      </header>
    )
  }
}




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




