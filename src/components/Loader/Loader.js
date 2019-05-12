import React, {Component} from 'react'
import "./Loader.css"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';

class Loader extends Component {

    state = {
        show: true,
        showScreen: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: false,
            })
        }, 200);
        setTimeout(() => {
            this.setState({
                showScreen: false,
            })
        }, 700);
    }

    render() {
        const {show,showScreen} = this.state;
        return (
            <div>
                <Fade top when={showScreen} duration={1500}>
                    <div className="loader">
                        <Fade top when={show} duration={800}>
                            <div className="loaderLogo">
                                <img src={require('../../images/logo.png')} />
                            </div>
                        </Fade>
                    </div>
                </Fade>
            </div>
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

export default Loader;


