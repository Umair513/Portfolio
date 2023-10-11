const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport")

// transport 
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)

const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Please provide all fields"
            })
        }

        transporter.sendMail({
            to: "soomroumair513@gmail.com",
            from: "soomroumair513@gmail.com",
            subject: "New Message From Umair Portfolio App",
            html: `
            <h5>Detail Information</h5>
            <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
            <li><p>Name : ${name}</p></li>
            </ul>
            `
        })
        return res.status(200).send({
            success: true,
            message: "Your message send successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error
        })
    }
}

module.exports = { sendEmailController }