import React from "react"
import Footer from "./footer/footer"
import "./global.css"
import Content from "./content/content"
import Navbar from "./navbar/navbar"

const Layout = ({ location, title, children}) => {

  return (
    <div style={{
      height: `100vh`
    }}>
      <Navbar title={title} />
      <Content children={children} />
      <Footer />
    </div>
  )
}

export default Layout
