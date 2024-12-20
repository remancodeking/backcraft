import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()


// Default email configuration options
const defaultOptions = {
    // host: 'smtp.ethereal.email',
    service:"gmail",
    secure:true,
    port: 465,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
};

// Function to send emails
const BackcraftEmail = async (options) => {
    try {
        // Check if options are provided
        if (!options) throw new Error("Options are required");

        // Create a transporter object using the default options
        const transporter = nodemailer.createTransport(defaultOptions);

        // Send the email
        await transporter.sendMail(options);

        console.log("Email sent successfully!!!");
    } catch (error) {
        // Log any errors that occur
        console.error("Error while sending email:", error);
    }
};

export default BackcraftEmail;
