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
        Curtiu o conteúdo? 
        <span class="small" role="img" aria-label="Emoji com olhos de coração">
          😍
        </span>
      </h3>

      <span>
        Espero de verdade que sim! No final desta página tu pode deixar o teu comentário 
        ou reagir à esta publicação. 
        Isso é muito importante para que eu consiga continuar trazendo mais conteúdos como este.
      </span>

      <h3>
      Te ajudei de alguma forma? Aceito um cafézinho... 
        <span class="small" style={{marginLeft: `5px`}} role="img" aria-label="Emoji de risada">
          😁
        </span>
        <span class="small" style={{marginLeft: `5px`}} role="img" aria-label="Emoji de café">
          ☕️
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


