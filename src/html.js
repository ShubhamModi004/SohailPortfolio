import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <link rel="shortcut icon" href="./images/logo.png" />
        <meta name="theme-color" content="#000" />
        <link rel="apple-touch-icon" sizes="48x48" href="./images/logo.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./images/logo.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="./images/logo.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./images/logo.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="./images/logo.png" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
