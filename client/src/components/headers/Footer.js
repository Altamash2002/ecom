import React from "react"
import { NavLink } from "react-router-dom"
import logoImg from '../../images/logo.png'
// import "./Footer.css"
import whatsappLogo from './icon/whatsapp.svg'
import mailLogo from './icon/mail.svg'
import instagramLogo from './icon/instagram.svg'


const Footer = () => {
  return (
    <div className="footer">
        <NavLink className='logo-follow' to='/'><img src={logoImg} alt='logo-img' width='100px' /></NavLink>
        <div className="logo-follow">
            <a href="https://wa.me/+918425998839"> <span className="icons"><img src={whatsappLogo} alt="whatsapp" /></span></a>
            <a href="mailto:shaikhaltamash_ce_2020@ltce.in"> <span className="icons"><img src={mailLogo} alt="mail" /></span></a>
            <a href="https://www.instagram.com/coding_altu/"> <span className="icons"><img src={instagramLogo} alt="instagram" /></span></a>
        </div>
        <h3 className="logo-follow">
            <a href='https://LTCE.in/' >LTCE</a>
        </h3>
    </div>
  )
}

export default Footer