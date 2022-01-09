
const nodemailer = require('nodemailer')
// const sendMailLib = require('sendmail')

// const { validateEmail, validateLength } = require('./validations')

//const sendMail = promisify(client())


const handler = async (event) => {
  console.log(event);
  let transporter;
    try {

       transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
          user: "zainabalimi870@gmail.com", 
          pass: "zainabalimi4321", 
        },
        tls: {
          rejectUnauthorized: false
      }
      });

    
      await transporter.sendMail({
        from: 'zainabalimi870@gmail.com', // sender address
        to: "tobilobabadrun@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

    }
    catch (error) {
      console.log(error);
      return { statusCode: 500, body: JSON.stringify(error.message) }
    }
    return {
      statusCode: 200,
      body: `"${JSON.stringify(transporter)}"`
    }

}
module.exports = { handler }
