import React from "react"

const Footer = () => {
  return (
    <footer className="text-center" 
            style={{
              marginTop: 5, 
              paddingTop: 10, 
              fontSize: 14}}>
      © {new Date().getFullYear()}, iurivargas.com 
      {'   '}
      <a className="link" 
        style={{
          boxShadow: `none`
        }} 
        href="/policies">Política de Privacidade</a>
      {'   '}
      <a className="link"
        style={{
          boxShadow: `none`
        }} 
        href="https://github.com/iurievargas/iurivargas.com/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
      .
    </footer>
  )
}

export default Footer
