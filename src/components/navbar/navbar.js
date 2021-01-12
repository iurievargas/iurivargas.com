import { Link } from "gatsby"
import React from "react"
import { scale } from "../../utils/typography"
import SocialLink from "../social/social-link"
import ThemeToggle from "../theme-toggle/theme-toggle"
import "./navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h3 
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
          fontSize: "1.5rem"
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
      </h3>

      <ThemeToggle />
    </div>
  )
}

export default Navbar
