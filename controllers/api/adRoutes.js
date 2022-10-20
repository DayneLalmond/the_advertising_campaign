const router = require('express').Router();
const { Ad, Contact } = require('../../models');
const mailjet = require('../../config/mailjet');
// path /api/ads

//add a contact to the mailjetstream
router.post('/', async (req, res) => {
    try {
        const adData = await Ad.create(req.body);

        res.status(200).json(adData)
    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
});


// const request = mailjet
//         .post('send')
//         .request({
//           Messages: [
//             {
//               From: {
//                 Email: "pilot@mailjet.com",
//                 Name: "Mailjet Pilot"
//               },
//               To: [
//                 {
//                   Email: "passenger1@mailjet.com",
//                   Name: "passenger 1"
//                 }
//               ],
//               Subject: "Your email flight plan!",
//               TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
//               HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
//             }
//           ]
//         })

module.exports = router;
