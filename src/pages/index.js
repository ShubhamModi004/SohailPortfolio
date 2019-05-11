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
import Footer from "../components/HomePage/Footer/Footer"
import Image from "../components/image";



import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Header/>
    <Hero/>
    <About/>
    <Work />
    <Myprocess/>
    <Footer/>
  </Layout>
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




export default IndexPage
