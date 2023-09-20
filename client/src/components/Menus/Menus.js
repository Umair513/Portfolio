import React from 'react'
import "./Menus.css"
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc"



const Menus = ({ toggle }) => {
    return (
        <>
            {
                toggle ? (
                    <>
                        <div className="navbar-profile-pic">
                            <img src="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_640.png" alt="" />
                        </div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <FcHome></FcHome>   Home
                                </div>
                                <div className="nav-link">
                                    <FcAbout></FcAbout>   About
                                </div>
                                <div className="nav-link">
                                    <FcPortraitMode></FcPortraitMode>   Work Experience
                                </div>
                                <div className="nav-link">
                                    <FcBiotech></FcBiotech>   Tech Stack
                                </div>
                                <div className="nav-link">
                                    <FcReadingEbook></FcReadingEbook>   Education
                                </div>
                                <div className="nav-link">
                                    <FcVideoProjector></FcVideoProjector>   Projects
                                </div>
                                <div className="nav-link">
                                    <FcVoicePresentation></FcVoicePresentation>   Testimonial
                                </div>
                                <div className="nav-link">
                                    <FcBusinessContact></FcBusinessContact>   Contact
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <FcHome title='Home'></FcHome>
                                </div>
                                <div className="nav-link">
                                    <FcAbout title='About'></FcAbout>
                                </div>
                                <div className="nav-link">
                                    <FcPortraitMode title='Work Experience' ></FcPortraitMode>
                                </div>
                                <div className="nav-link">
                                    <FcBiotech title='Tech Stack'></FcBiotech>
                                </div>
                                <div className="nav-link">
                                    <FcReadingEbook title='Education'></FcReadingEbook>
                                </div>
                                <div className="nav-link">
                                    <FcVideoProjector title='Projects'></FcVideoProjector>
                                </div>
                                <div className="nav-link">
                                    <FcVoicePresentation title='Testimonial'></FcVoicePresentation>
                                </div>
                                <div className="nav-link">
                                    <FcBusinessContact title='Contact'></FcBusinessContact>
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
