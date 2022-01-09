// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
// const { promisify } = require('util')

const accountSid = 'ACa77b13ab6da580a9d096dfe017a214f3' //process.env.TWILIO_ACCOUNT_SID;
const authToken = '24f31fd7b0d3f2a071e9250745431870' //process.env.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
// const sendMailLib = require('sendmail')

// const { validateEmail, validateLength } = require('./validations')

//const sendMail = promisify(client())


const handler = async (event) => {
  console.log(client, event);
  const body = JSON.parse(event.body)

  try {
     client.messages
    .create({
      to: '+2349023246423',
      from: '+12057073295',
      body: body.word,
    })
    
  }
  catch (error) {
    return { statusCode: 500, body: error.message }
  }


}
module.exports = { handler }
