import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/HomePage/Hero"
import About from "../components/HomePage/About"
import Work from "../components/HomePage/Work/Work"
import Myprocess from "../components/HomePage/Myprocess/Myprocess"
import Blog from "../components/HomePage/Blog/Blog"




import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Header/>
    <Hero/>
    <About/>
    <Work />
    <Myprocess/>
    <Blog/>
  </Layout>
)


export default IndexPage
