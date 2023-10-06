import React from 'react'
import "./Menus.css"
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc"
import Profile from "../../assets/images/profile.png"
import { Link } from "react-scroll"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"


const Menus = ({ toggle }) => {
    return (
        <>
            {
                toggle ? (
                    <>
                        <Zoom>
                            <div className="navbar-profile-pic">
                                {/* <img src="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png" alt="" /> */}
                                <img src={Profile} alt="Profile" />
                            </div>
                        </Zoom>
                        <Fade>
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
                        </Fade>
                    </>
                ) : (
                    <>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcHome></FcHome>
                                    </Link>

                                </div>
                                <div className="nav-link">
                                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcAbout></FcAbout>
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcReadingEbook></FcReadingEbook>
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcBiotech></FcBiotech>
                                    </Link>
                                </div>

                                <div className="nav-link" spy={true} smooth={true} offset={-100} duration={100}>
                                    <Link to='projects' >
                                        <FcVideoProjector></FcVideoProjector>
                                    </Link>
                                </div>
                                <div className="nav-link" spy={true} smooth={true} offset={-100} duration={100}>
                                    <Link to='work' >
                                        <FcPortraitMode></FcPortraitMode>
                                    </Link>
                                </div>

                                <div className="nav-link" spy={true} smooth={true} offset={-100} duration={100}>
                                    <Link to='contact'>
                                        <FcBusinessContact></FcBusinessContact>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Menus
