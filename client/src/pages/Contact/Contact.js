import React from 'react'
import "./Contact.css"
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs"

const Contact = () => {
    return (
        <>
            <div className="contact">
                <h2 className='col-12 mt-5 mb-1 text-center text-uppercase'>Contact With Us</h2>
                <div className="container1">
                    <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt="contact" />
                    <div className="right">
                        <h5>Contact with
                            <BsLinkedin className='linkedin'></BsLinkedin>
                            <BsGithub className='github'></BsGithub>
                            <BsFacebook className='facebook'></BsFacebook>
                        </h5>
                        <h3 className='or'>OR</h3>
                        <input type="text" name='name' placeholder='Enter your name' />
                        <input type="gmail" name='gmail' placeholder='Enter your gmail' />
                        <textarea type="text" name='message' placeholder='Enter your message' />
                        <button type='submit' className='button'>Submit</button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
