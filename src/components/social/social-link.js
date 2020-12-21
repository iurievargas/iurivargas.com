import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faMedium, faNode, faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import "./social-link.css"

function SocialLink({type}) {

    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              social {
                twitter
                github
                medium
                instagram
                linkedin
                whatsapp
                gmail
              }
            }
          }
        }
      `
    )

    let to = "/";
    let icon = faNode;

    switch(type){
        case "instagram":
            to = "https://www.instagram.com/".concat(site.siteMetadata.social.instagram);
            icon = faInstagram;
        break;
        case "linkedin":
            to = "https://www.linkedin.com/in/".concat(site.siteMetadata.social.linkedin);
            icon = faLinkedin;
        break;
        case "medium":
            to = "https://medium.com/".concat(site.siteMetadata.social.medium);
            icon = faMedium;
        break;
        case "github":
            to = "https://github.com/".concat(site.siteMetadata.social.github);
            icon = faGithub;
        break;
        case "whatsapp":
          to = "https://api.whatsapp.com/send?phone=".concat(site.siteMetadata.social.whatsapp);
          icon = faWhatsapp;
        break;
        case "gmail":
          to = "mailto:".concat(site.siteMetadata.social.gmail);
          icon = faGoogle;
        break;
        default:
          return;

    }
  
   return (
    <a href={to}
          target="_blank"
          rel="noreferrer"
          className="social-link">
        <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  )
}

export default SocialLink

