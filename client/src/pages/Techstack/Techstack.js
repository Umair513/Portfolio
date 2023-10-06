import React from 'react'
import "./Techstack.css"
import { TechstackList } from '../../utils/TechstackList'
import RubberBand from "react-reveal/RubberBand"
import Fade from "react-reveal/Fade"

const Techstack = () => {
    return (
        <>
            <div className="container techstack" id='techstack'>
                <RubberBand>
                    <h2 className='col-12 mt-5 mb-1 text-center text-uppercase'>Technologies Stack</h2>
                    <hr></hr>
                    <p className='pb-3 text-center'>👉 including programming languages, frameworks, databases, front-end and back-end tools, and APIs</p>
                </RubberBand>
            </div>
            <div className="row">
                {TechstackList.map((tech) => (
                    <Fade left>
                        <div key={tech._id} className='col-md-3'>
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="align-self-center">
                                                <tech.icon className='tech-icon' />
                                            </div>
                                            <div className="media-body mt-2">
                                                <h5>{tech.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div >

        </>
    )
}

export default Techstack
