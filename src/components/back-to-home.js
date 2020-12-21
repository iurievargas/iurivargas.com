import React from "react"
import SidebarLink from "../components/sidebar-link/sidebar-link"

function BackToHomeLink() {
      
   return (
    <div style={{
        marginTop: `10px`,
        marginBottom: `10px`
      }}>
        <SidebarLink title={`← Voltar às publicações`} url={`/`}></SidebarLink>
      </div>
  )
}

export default BackToHomeLink




