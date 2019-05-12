import React, {Component} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Loader from "../components/Loader/Loader"

import Hero from "../components/HomePage/Hero"
import About from "../components/HomePage/About"
import Work from "../components/HomePage/Work/Work"
import Myprocess from "../components/HomePage/Myprocess/Myprocess"
import Blog from "../components/HomePage/Blog/Blog"

// For the fade in effect;
import Fade from 'react-reveal/Fade';

import SEO from "../components/seo"

class IndexPage extends Component {

	state= {
		render: false
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({
				render: true
			})
		}, 1800);
	}

	render() {
		const {render } = this.state;
		return (
			(!render ? <Loader/> :
				<Fade delay={100}>
					<Layout>
						<Header />
						<Hero />
						<About />
						<Work />
						<Myprocess />
						<Blog />
					</Layout>
				</Fade>
			)
		)
	}
}
  
export default IndexPage;
