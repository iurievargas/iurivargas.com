import React from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"
import Footer from "./footer/footer"
import "./global.css"
import SocialLink from "./social/social-link"
import SidebarLink from "./sidebar-link/sidebar-link"
import ThemeToggle from "./theme-toggle/theme-toggle"
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
