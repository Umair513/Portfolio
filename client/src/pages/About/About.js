import React from 'react'
import "./About.css"
import Profile from "../../assets/images/profile.png"
import Jump from "react-reveal/Jump"

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id='about'>
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src={Profile} alt="" />
                        </div>
                        <div className="col-md-6 about-content col-xl-6 col-lg-6 col-xs-12">
                            <h1>About me</h1>
                            <p>Innovative and motivated Computer Science graduate skilled in Web Engneering computer science
                                graduate adept in diverse domains including web and Android development. Proficient in an array of
                                technologies such as JavaScript, React JS, Node JS, Git, MongoDB, React-Native, and Python. I led
                                the creation of an intuitive an inter-campus socializing app for students (Student Collab), Chat
                                Application, Budget Calculator, Pizza Shop, Food Recipe App, Text Utils App. With a proven record of
                                delivering high-impact projects, I am primed to contribute effectively and drive innovation in your team.</p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}

export default About
