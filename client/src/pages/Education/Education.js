import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md"

const Education = () => {
    return (
        <>
            <div className="container education" id='education'>
                <h2 className='col-12 mt-5 mb-1 text-center text-uppercase'>Education details</h2>
                <hr></hr>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2019 - 2023"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">BS Computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">Sukkur IBA Univrsity, SUK</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2017 - 2019"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">HSC, Pre-Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">Government Superior Science College, KHP</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2015 - 2017"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">SSC, Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">Sindh Children's Academy, KHP</h4>

                    </VerticalTimelineElement>
                </VerticalTimeline >
            </div>
        </>
    )
}

export default Education
