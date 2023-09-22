import React from 'react'
import "./home.css"
import Typewriter from "typewriter-effect"
import Resume from "../../assets/docs/cv.pdf"
import Model from "../../assets/images/model.png"

const Home = ({ toggle }) => {
    return (
        <>
            <div className="container-fluid home-container">
                <div className="container home-content">
                    <h1>Hi 👋 I'm a </h1>
                    <h2>
                        <Typewriter
                            options={
                                {
                                    strings: ["Full Stack Developer !", "MERN Stack Developer !", "Front End Developer !"],
                                    autoStart: true,
                                    loop: true
                                }
                            }
                        />
                    </h2>
                    <div className="home-buttons">
                        <button className='btn btn-hire'>Hire Me</button>
                        <a className='btn btn-cv' href={Resume} download="Umair.pdf">My Resume</a>
                    </div>
                </div>
                <div className="model">
                    <img src={Model} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home
