import React from 'react'
import "./Work.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiReact } from "react-icons/si"

const Work = () => {
    return (
        <>
            <div className="work" id='work'>
                <div className="container work-exp">
                    <h2 className='col-12 mt-5 mb-1 text-center text-uppercase'>Work Experience</h2>
                    <hr></hr>
                    <VerticalTimeline lineColor='#1e1e2c'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="March 2023 - April 2023"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">The Spark Foundation, Remote</h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="April 2023 - May 2023"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Front End Developer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Oasis Infobyte, Remote</h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="April 2023 - May 2023"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Front End Developer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Oasis Infobyte, Remote</h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: '1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="September 2023 - October 2023"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">BHARAT INTERN, Remote</h4>

                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div >
        </>
    )
}

export default Work
