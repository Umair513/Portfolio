import React from 'react'
import "./home.css"
import Typewriter from "typewriter-effect"
import Resume from "../../assets/docs/cv.pdf"
import Model from "../../assets/images/model.png"
import { useTheme } from '../../context/ThemeContext'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import Fade from "react-reveal/Fade"

const Home = ({ toggle }) => {
    const [theme, setTheme] = useTheme()
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
    }
    return (
        <>
            <div className="container-fluid home-container" id='home'>
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === "light" ? (<BsFillMoonStarsFill size={30}></BsFillMoonStarsFill>) : (<BsFillSunFill size={30}></BsFillSunFill>)}
                </div>
                <div className="container home-content">
                    <Fade right>
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
                    </Fade>
                    <Fade>
                        <div className="home-buttons">
                            <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=03043728679' rel='noreferrer' target='_blank'>Hire Me</a>

                            <a className='btn btn-cv' href={Resume} download="Umair.pdf">My Resume</a>
                        </div>
                    </Fade>

                </div>
                <div className="model">
                    <img src={Model} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home
