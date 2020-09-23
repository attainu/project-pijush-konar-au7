import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_KEY)

module.exports = async (to, content) => {
  const config = {
    to: to,
    from: 'pjk612@gmail.com',
    subject: 'GuruKul Email Confirmation',
    html: content
  }

  try {
    await sgMail.send(config);
  }
  catch (err) {
    console.error(err);
  }
  
  }