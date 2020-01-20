const sgMail = require ('@sendgrid/mail')

const sendgridAPIKey = (process.env.SENDGRID_API_KEY)

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to : email,
        from : 'andrew@mead.io',
        subject : 'Thanks for joining in!',
        text : `Welcome the the app, ${name}. Let me know how you get along with the app`
    })

}

const sendCancelationEmail = (email, name) =>{
    sgMail.send({
        to : email,
        from : 'andrew@mead.io',
        subject : 'Sorry to see you go',
        text : `Goodbye, ${name}. I Hope yo see you sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}