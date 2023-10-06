// import React from 'react'
// import "./Projects.css"
// import Collab from "../../assets/images/collab.png"
// import Utils from "../../assets/images/textutils.png"
// import Video from "../../assets/images/video.png"
// import Spinn from "react-reveal/Spin"

// const Projects = () => {
//     return (
//         <>
//             <div className="container project" id='projects'>
//                 <h2 className='col-12 mt-5 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
//                 <hr></hr>
//                 <p className='pb-3 text-center'>Here are my top 3 recent projects with live links and source code</p>
//                 <div className="row" id='ads'>
//                     <Spin>
//                         <div className="col-md-4">
//                             <div className="card rounded">
//                                 <div className="card-image">
//                                     <span className='card-notify-badge'>Full Stack</span>
//                                     <img src={Collab} alt='project 1'></img>
//                                 </div>
//                                 <div className="card-image-overly m-auto mt-3">
//                                     <span className='card-details-badge'>React JS</span>
//                                     <span className='card-details-badge'>Node JS</span>
//                                     <span className='card-details-badge'>Express JS</span>
//                                     <span className='card-details-badge'>Firebase</span>

//                                 </div>
//                                 <div className="card-body m-auto text-center">
//                                     <div className="ad-title m-auto">
//                                         <h5 className="text-uppercase">Student Collab</h5>
//                                     </div>
//                                     <a className='ad-btn' href='https://student-colab.netlify.app/?fbclid=IwAR3mk9zStzv20omH9kc4WM9y7BeayjuI952zrsBZlCh8JJcn9kn5-0hmw9k'>View</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="card rounded">
//                                 <div className="card-image">
//                                     <span className='card-notify-badge'>Full Stack</span>
//                                     <img src={Utils} alt='project 1'></img>
//                                 </div>
//                                 <div className="card-image-overly m-auto mt-3">
//                                     <span className='card-details-badge'>HTML</span>
//                                     <span className='card-details-badge'>CSS</span>
//                                     <span className='card-details-badge'>React JS</span>
//                                     <span className='card-details-badge'>JavaScript</span>

//                                 </div>
//                                 <div className="card-body m-auto text-center">
//                                     <div className="ad-title m-auto">
//                                         <h5 className="text-uppercase">Text Utils Web App</h5>
//                                     </div>
//                                     <a className='ad-btn' href='https://github.com/Umair513/TextUtils_React_App'>View</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="card rounded">
//                                 <div className="card-image">
//                                     <span className='card-notify-badge'>Full Stack</span>
//                                     <img src={Video} alt='project 1'></img>
//                                 </div>
//                                 <div className="card-image-overly m-auto mt-3">
//                                     <span className='card-details-badge'>React JS</span>
//                                     <span className='card-details-badge'>Socket.io</span>
//                                     <span className='card-details-badge'>WebRTC</span>
//                                     <span className='card-details-badge'>Node JS</span>

//                                 </div>
//                                 <div className="card-body m-auto text-center">
//                                     <div className="ad-title m-auto">
//                                         <h5 className="text-uppercase">Video Conferencing App</h5>
//                                     </div>
//                                     <a className='ad-btn' href='https://github.com/Umair513/Video-Conferencing-App'>View</a>
//                                 </div>
//                             </div>
//                         </div>
//                 </div>
//             </Spin>

//         </div >

//         </>
//     )
// }

// export default Projects

import React from 'react';
import "./Projects.css";
import Collab from "../../assets/images/collab.png";
import Utils from "../../assets/images/textutils.png";
import Video from "../../assets/images/video.png";
import Spin from "react-reveal/Spin"; // Import Spin from react-reveal

const Projects = () => {
    return (
        <>
            <div className="container project" id='projects'>
                <h2 className='col-12 mt-5 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
                <hr />
                <p className='pb-3 text-center'>Here are my top 3 recent projects with live links and source code</p>
                <div className="row" id='ads'>
                    <Spin>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={Collab} alt='project 1' />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-details-badge'>React JS</span>
                                    <span className='card-details-badge'>Node JS</span>
                                    <span className='card-details-badge'>Express JS</span>
                                    <span className='card-details-badge'>Firebase</span>
                                </div>
                                <div className="card-body m-auto text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Student Collab</h5>
                                    </div>
                                    <a className='ad-btn' href='https://student-colab.netlify.app/?fbclid=IwAR3mk9zStzv20omH9kc4WM9y7BeayjuI952zrsBZlCh8JJcn9kn5-0hmw9k'>View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={Utils} alt='project 2' />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-details-badge'>HTML</span>
                                    <span className='card-details-badge'>CSS</span>
                                    <span className='card-details-badge'>React JS</span>
                                    <span className='card-details-badge'>JavaScript</span>
                                </div>
                                <div className="card-body m-auto text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Text Utils Web App</h5>
                                    </div>
                                    <a className='ad-btn' href='https://github.com/Umair513/TextUtils_React_App'>View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={Video} alt='project 3' />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-details-badge'>React JS</span>
                                    <span className='card-details-badge'>Socket.io</span>
                                    <span className='card-details-badge'>WebRTC</span>
                                    <span className='card-details-badge'>Node JS</span>
                                </div>
                                <div className="card-body m-auto text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Video Conferencing App</h5>
                                    </div>
                                    <a className='ad-btn' href='https://github.com/Umair513/Video-Conferencing-App'>View</a>
                                </div>
                            </div>
                        </div>
                    </Spin>
                </div>
            </div>
        </>
    );
}

export default Projects;
