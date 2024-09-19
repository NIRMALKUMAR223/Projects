const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    const { name, email, message } = JSON.parse(event.body);

    // Set up the transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variables for sensitive info
            pass: process.env.EMAIL_PASS
        }
    });

    // Set up the mail options
    const mailOptions = {
        from: email,
        to: 'aspirenovatech@gmail.com',  // Your company email address
        subject: `Message from ${name}`,
        text: message
    };

    console.log('Sending email with options:', mailOptions);

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
