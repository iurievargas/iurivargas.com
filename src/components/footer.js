import React from "react"

const Footer = () => {
  return (
    <footer className="text-center" style={{marginTop: "5px", paddingTop: "10px", fontSize: "10px"}}>
      © {new Date().getFullYear()}, iurivargas.com 
      {'   '}
      <a class="link" href="/policies">Política de Privacidade</a>
      {'   '}
      <a class="link" href="https://github.com/iurievargas/iurivargas.com/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
      .
    </footer>
  )
}

export default Footer
