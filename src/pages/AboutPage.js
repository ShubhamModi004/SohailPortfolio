import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Loader from "../components/Loader/Loader"

import Hero from "../components/AboutPage/Hero"
import About from "../components/AboutPage/About"
import Extra from "../components/AboutPage/Extra/Extra"
import Myprocess from "../components/AboutPage/Myprocess/Myprocess"
import Blog from "../components/AboutPage/Blog/Blog"

// For the fade in effect;
import Fade from 'react-reveal/Fade';

import SEO from "../components/seo"

class IndexPage extends Component {

    state = {
        render: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                render: true
            })
        }, 1800);
    }

    render() {
        const { render } = this.state;
        return (
            (!render ? <Loader /> :
                <Fade delay={100}>
                    <Layout>
                        <Header />
                        <Hero/>
                        <About/>
                        <Extra/>
                        <Myprocess/>
                        <Blog/>
                    </Layout>
                </Fade>
            )
        )
    }
}

export default IndexPage;
