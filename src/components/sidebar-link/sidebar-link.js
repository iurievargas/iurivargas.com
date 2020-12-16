import React from "react"
import "./sidebar-link.css"

const SidebarLink = ({title, url}) => {
  return (
    <span className="sidebar-link">
      <a          
          href={url}>
          {title}
        </a>
      </span>
  )
}

export default SidebarLink;
