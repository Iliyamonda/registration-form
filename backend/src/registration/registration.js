const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
        user: 'postmaster@sandbox8af95d98793444ef8e6687e96014c352.mailgun.org',
        pass: '15cf83431864923a8b037de451fdb389-ee16bf1a-4b1b9621'
    }
});
const registration = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const info = await transporter.sendMail({
            from: `'${name}' ${email}`,
            to: 'xopoho2222@gmail.com',
            subject: 'Hello ✔',
            text: 'Нова реєстрація',
            html: `<b>Користувач ${name} (${email}) зареєструвався з повідомленням: ${message}</b>`,
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).send('OK');
    } catch (error) {
        console.log(error);
        res.status(500).json('FAILED');
    }
}

module.exports = registration;