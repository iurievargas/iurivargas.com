import React from "react"
import "./sidebar-link.css"

const SidebarLink = ({title, url, target}) => {
  return (
    <span className="sidebar-link">
      <a  target={target}        
          href={url}>
          {title}
        </a>
      </span>
  )
}

export default SidebarLink;
