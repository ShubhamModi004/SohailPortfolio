import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Loader from "../components/Loader/Loader"

import Hero from "../components/ProcessPage/Hero"
import About from "../components/ProcessPage/About"
import ProcessWorks from "../components/ProcessPage/ProcessWorks/ProcessWorks"
import Myprocess from "../components/ProcessPage/Myprocess/Myprocess"
import Blog from "../components/HomePage/Blog/Blog"

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
                        <Hero />
                        <About />
                        <ProcessWorks />
                        <Myprocess />
                        <Blog />
                    </Layout>
                </Fade>
            )
        )
    }
}

export default IndexPage;
