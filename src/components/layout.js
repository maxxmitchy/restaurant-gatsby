/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import Navbar from "../components/globals/navbar"
import Footer from "../components/globals/Footer"
import "./layout.css"
import "./bootstrap.min.css"
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0 ;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background: #fff;
}
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
