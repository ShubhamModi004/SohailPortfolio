import React from "react"
import Img from "gatsby-image";
import { StaticQuery, graphql, Link } from "gatsby"

import Hero from "../components/ContactPage/Hero/Hero"
import Footer from "../components/ContactPage/Footer/Footer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <div class="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </div>
    <Hero/>
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


export default Contact
