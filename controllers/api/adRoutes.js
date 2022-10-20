const router = require('express').Router();
const { Ad } = require('../../models');
const mailjet = require('../../config/mailjet')

// const createAd = mailjet
//         .post('send', { version: 'v3.1' })
//         .request({
//           Messages: [
//             {
//               From: {
//                 Email: "dlalmondo@gmail.com",
//                 Name: "TAC"
//               },
//               To: [
//                 {
//                   Email: "dlalmondo@gmail.com",
//                   Name: "passenger 1"
//                 }
//               ],
//               Subject: "Do not email me!",
//               TextPart: "If you are working on this, make sure to change [To: ? | Email: ?] to your email to view changes.",
//               HTMLPart: "<h3>Dear passenger 1, the stage is yours</h3><br />Do not change the email this function is called from. The API is registered under dlalmondo@gmail.com."
//             }
//           ]
//         })

// createAd
//     .then((result) => {
//         console.log(result.body)
//     })
//     .catch((err) => {
//         console.log(err.statusCode)
//     })

module.exports = router;
