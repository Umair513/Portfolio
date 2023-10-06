import React from 'react'
import "./MobileNav.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc"
import { Link } from "react-scroll"

const MobileNav = () => {
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    <GiHamburgerMenu size={30} className='mobile-nav-icon'></GiHamburgerMenu>
                    <span className='mobile-nav-title'>My Portfolio App</span>
                </div>
                <div className="mobile-nav-menu">
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcHome></FcHome>   Home
                                </Link>

                            </div>
                            <div className="nav-link">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcAbout></FcAbout>   About
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcReadingEbook></FcReadingEbook>   Education
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                                    <FcBiotech></FcBiotech>   Tech Stack
                                </Link>
                            </div>

                            <div className="nav-link" spy={true} smooth={true} offset={-100} duration={100}>
                                <Link to='projects' >
                                    <FcVideoProjector></FcVideoProjector>   Projects
                                </Link>
                            </div>
                            <div className="nav-link" spy={true} smooth={true} offset={-100} duration={100}>
                                <Link to='work' >
                                    <FcPortraitMode></FcPortraitMode>   Work Experience
                                </Link>
                            </div>

                            <div className="nav-link" spy={true} smooth={true} offset={-100} duration={100}>
                                <Link to='contact'>
                                    <FcBusinessContact></FcBusinessContact>   Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav
