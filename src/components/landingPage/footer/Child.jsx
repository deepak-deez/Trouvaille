import React from 'react'
import "./child.scss"
import logo from "../../../assets/images/navBar/logo.svg";
import facebook from "../../../assets/images/footerIcons/facebook.svg"
import twitter from "../../../assets/images/footerIcons/twitter.svg"
import instagram from "../../../assets/images/footerIcons/instagram.svg"
import linkedin from "../../../assets/images/footerIcons/linkedin.svg"
import youtube from "../../../assets/images/footerIcons/youtube.svg"
import apple from "../../../assets/images/footerIcons/apple.svg"
import pinterest from "../../../assets/images/footerIcons/pinterest.svg"

export default function Footer() {
  return (
    <footer className='lg:px-[76px] px-[50px] py-[10px] mt-[90px] lg:py-[40px] flex flex-col gap-[50px]'>
        <div className='flex flex-col social-media justify-center items-center gap-9'>
            <p>Get Social with us</p>
            <ul className='flex flex-wrap gap-[24px] justify-center lg:gap-[48px]'>
                <li><img src={facebook} alt="social-media-icons"/></li>
                <li><img src={twitter} alt="social-media-icons"/></li>
                <li><img src={instagram} alt="social-media-icons"/></li>
                <li><img src={linkedin} alt="social-media-icons"/></li>
                <li><img src={youtube} alt="social-media-icons"/></li>
                <li><img src={apple} alt="social-media-icons"/></li>
                <li><img src={pinterest} alt="social-media-icons"/></li>
            </ul>
        </div>
      <div className='flex flex-col lg:flex-row justify-between gap-9 items-center'>
        <div className="flex flex-row gap-[9px]">
            <img src={logo} alt="logo" />
            <div className="flex flex-col">
            <h4 className="text-[30.68px] trouvaille-heading">trouvaille</h4>
            <p className="text-[8.74px] tracking-[3px] trouvaille-text mt-[-8px]">
                Front-facing Website
            </p>
            </div>
        </div>
        <ul className='flex flex-wrap footer-text-color gap-[24px] lg:gap-[48px] justify-center xl:justify-between'>
            <li>Home</li>
            <li>Trips</li>
            <li>Contacts</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
        <p className='footer-text-color'>© 2023 Trouville, Inc.</p>
      </div>
    </footer>
  )
}
