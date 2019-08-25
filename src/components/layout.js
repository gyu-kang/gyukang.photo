import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

class Layout extends Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-around`,
          height: `100%`
        }}
      >
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
