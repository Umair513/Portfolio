import React, { useState } from 'react'
import "./Contact.css"
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name || !msg || !email) {
                toast.error("Please provide all fields")
            }
            const res = await axios.post("/api/v1/portfolio/sendEmail", { name, email, msg })
            if (res.data.success) {
                toast.success(res.data.message)
                setEmail("")
                setName("")
                setMsg("")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="contact" id='contact'>
                <ToastContainer />
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
                        <input type="text" name='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="gmail" name='gmail' placeholder='Enter your gmail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea type="text" name='message' placeholder='Enter your message' value={msg} onChange={(e) => setMsg(e.target.value)} />
                        <button className='button' onClick={handleSubmit}>Submit</button>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
