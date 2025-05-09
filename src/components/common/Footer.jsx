import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer className="foot_container">
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>

          </>
        ))}

        <p data-aos='zoom-in'>Made with &hearts;</p>
        <p data-aos='zoom-in'>Fashion&Lifestyle © 2025 - All right reserved.Crafted with care by the Fashion Team</p>
        <ul style={{ display: "flex", listStyle: "none", gap: "15px", padding: "0", margin: "0", justifyContent: "center" }}>
          <li><a href="/aboutus">About us</a></li>
          <li><a href="/Contact" >Contact</a></li>
        </ul>

      </footer>
      
    </>
  )
}

export default Footer
