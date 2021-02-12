import React from "react"
import SocialLink from "../social/social-link";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div id="social">
        <SocialLink type={`github`} />
        <SocialLink type={`linkedin`} />
        <SocialLink type={`instagram`} />
        <SocialLink type={`whatsapp`} />
      </div>


      <div id="terms">
        <ul>
          <li>
            <a href="/about">Sobre mim</a>
          </li>
          <li>
            <a href="/policies">Privacidade</a>
          </li>
          <li>
            <a href="https://github.com/iurievargas/iurivargas.com/blob/master/LICENSE" 
            target="_blank" 
            rel="noreferrer"
            >Termos</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
