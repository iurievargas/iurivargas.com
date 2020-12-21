import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SidebarLink from "../sidebar-link/sidebar-link"
import "./donate.css"

const Donate = () => {

  const { site }  = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            donate {
              picpay
              mercadopago
            }
          }
        }
      }
  `);

  return (
    <div style={{
      marginBottom: 30
    }}>
      <h3>
        Gostou dessa publicação? Aceito um cafézinho
        <span class="small" role="img" aria-label="Emoji de café">
          ☕️
        </span>
        <span class="small" role="img" aria-label="Emoji com olhos de coração">
          😍
        </span>
      </h3>
      <div>
        <SidebarLink target={`_blank`} title={`Picpay (qualquer valor)`} url={site.siteMetadata.donate.picpay}></SidebarLink>
      </div>
      <div>
        <SidebarLink target={`_blank`} title={`Mercado Pago (R$5,00)`} url={site.siteMetadata.donate.mercadopago}></SidebarLink>
      </div>
    </div>
  )
}

export default Donate


