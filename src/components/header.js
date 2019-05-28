import PropTypes from "prop-types"
import React, {Component} from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link  } from "gatsby"
import Fade from 'react-reveal/Fade';
import { slide as Menu } from 'react-burger-menu'


import './header.css';


class Header extends Component{
  state={
    isActive: false
  }

  toggleHamburger = () => {
    const { isActive } = this.state;
    console.log('something happened')
    this.setState({
      isActive: !isActive
    })
  }

  render(){
    const { isActive } = this.state
    return(
      <header className={"header container " + (isActive ? 'hideBody' : 'dontHide')}>
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
            <a className="blck" href="mailto:Lifeofpixels0707@gmail.com">GET IN TOUCH</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile">
          <div>
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right onStateChange={() => this.toggleHamburger()}>
            <Link className="menu-item" to="/" activeClassName='active'>WORK</Link>
            <Link className="menu-item" to="/AboutPage" activeClassName='active'>ABOUT</Link>
            <Link className="menu-item" to="/ProcessPage" activeClassName='active'>PROCESS</Link>
          </Menu>
          </div>
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




