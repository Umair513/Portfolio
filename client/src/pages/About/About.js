import React from 'react'
import "./About.css"
import Profile from "../../assets/images/profile.png"

const About = () => {
    return (
        <>
            <div className="about">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="col-md-6 about-content col-xl-6 col-lg-6 col-xs-12">
                        <h1>About me</h1>
                        <p>I am a Computer Science graduate from SUKKUR IBA University (2019-2023). I have expertise in Web Development and want to establish my career in this field. My Expertise is MERN STACK.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
