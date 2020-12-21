import React from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"
import Footer from "./footer"
import "./global.css"
import SocialLink from "./social/social-link"
import SidebarLink from "./sidebar-link/sidebar-link"
import ThemeToggle from "./theme-toggle/theme-toggle"

const Layout = ({ location, title, children}) => {

  const header = ( 
    <>
      <ThemeToggle />
      <h2
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
      <SidebarLink title={`Sobre Mim`} url={`/about`} />

      <div style={{
        position: `absolute`,
        bottom: `10px`
      }}>
        <SocialLink type={`github`} />
        <SocialLink type={`linkedin`} />
        <SocialLink type={`medium`} />
        <SocialLink type={`gmail`} />
        <SocialLink type={`instagram`} />
        <SocialLink type={`whatsapp`} />
      </div>
    </>
  )

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
        minHeight: "100vh",
      }}
    >
      <div className="sidebar">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
          style={{ minHeight: 200 }}
        >
          {header}
        </div>
      </div>

      <div className="main-content relative">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
