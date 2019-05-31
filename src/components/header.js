import PropTypes from "prop-types"
import React, { Component } from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import { slide as Menu } from 'react-burger-menu'


import './header.css';


class Header extends Component {
  state = {
    isActive: false,
    contactForm: false
  }

  toggleHamburger = () => {
    const { isActive } = this.state;
    console.log('something happened')
    this.setState({
      isActive: !isActive
    })
  }
  toggleContactForm = () => {
    const { contactForm } = this.state;

    this.setState({
      contactForm: !contactForm
    });
    console.log(contactForm);
  };

  renderContactForm() {
    const { contactForm } = this.state;
    return (
      <div>
        {contactForm ?
          <div>
            <Fade >
              <div className="contactform">
                <div className="contactform-container">
                  <div className="container">
                    <div class="cross cross--big" onClick={this.toggleContactForm}><span class="cross__icon"></span></div>
                    <h2>Let's connect</h2>
                    <form className="form-blck" action="https://formspree.io/lifeofpixels0707@gmail.com" method="POST">
                      <input className="email" type="email" id="fname" name="email" placeholder="Email" />
                      <textarea className="message" placeholder="Message" />
                      <input type="submit" value="Submit" className="submit" />
                    </form>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="offset" onClick={this.toggleContactForm}>

              </div>
            </Fade>
          </div>
          : null
        }
      </div>
    );
  };


  render() {
    const { isActive } = this.state
    return (
      <header className={"header container " + (isActive ? 'hideBody' : 'dontHide')}>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {this.renderContactForm()}
        {/* Desktop Menu */}
        <div className="desktop">
          <div className="header-links">
            <Link to="/" activeClassName='active'>WORK</Link>
            <Link to="/AboutPage" activeClassName='active'>ABOUT</Link>
            <Link to="/ProcessPage" activeClassName='active'>PROCESS</Link>
            <a className="blck" onClick={this.toggleContactForm}>GET IN TOUCH</a>
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




