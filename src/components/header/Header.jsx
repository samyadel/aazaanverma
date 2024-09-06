import React from 'react'
import "./Header.styles.css"
import logo from "../../assets/logo2.png"

function Header({setImageClicked}) {
  return (
    <header className="header">
        <img src={logo} className='logo' onClick={() => setImageClicked(false)} />

        <ul className="headerLinks">
            <li className="active"><a onClick={() => setImageClicked(false)}>Portfolio</a></li>
            <li><a href='mailto:aazaanverma@gmail.com'>Contact</a></li>
        </ul>
    </header>
  )
}

export default Header