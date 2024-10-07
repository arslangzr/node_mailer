const nodemailer = require("nodemailer");
require('dotenv').config();

var transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Muhammad Arsalan" <arslan@example.com>', // sender address
        to: "user1@example.com, user2@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world plain texttext", // plain text body
        html: "<b>Hello world email html</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
