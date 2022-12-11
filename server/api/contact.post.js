







import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD,
    },
    secure: false
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        console.log(config);
        console.log(body);

        const mail = await transporter.sendMail({
            from: config.MAILUSER,
            to: config.CONTACTMAIL,
            subject: body.subject,
            text: body.message,
            html: body.message
        });

        

        console.log(`Message sent: ${mail.messageId}`);
        console.log(`Prewiew URL: ${nodemailer.getTestMessageUrl(mail)}`);
    

        return "";
    } catch (err) {
        sendError(event, createError({status: 400, statusMessage: err}))
    }
  })