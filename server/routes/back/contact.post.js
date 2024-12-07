import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    pool: true,
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD,
    },


    secure: false,
        tls: {rejectUnauthorized: false},
        debug:true
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        console.log(config);
        console.log(body);

        const mail = await transporter.sendMail({
            from: config.MAILUSER,
            to: config.CONTACTMAIL,
            subject: "Сообщение с сайта",
            text: body.message + ' ' + body.phone,
            html:   'От (имя): '  + body.name + '<br/> ' + 'Номер телефона: ' + ' ' + body.phone + '<br/> ' + 'Сообщение: '  + ' ' + body.message ,
        });

        

        console.log(`Message sent: ${mail.messageId}`);
        console.log(`Prewiew URL: ${nodemailer.getTestMessageUrl(mail)}`);
    

        return "";
    } catch (err) {
        sendError(event, createError({status: 400, statusMessage: err}))
    }
  })