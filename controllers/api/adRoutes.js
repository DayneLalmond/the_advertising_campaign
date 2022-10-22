const router = require('express').Router();
const { Ad, Contact } = require('../../models');
const mailjet = require('../../config/mailjet');
// path /api/ads

//add a contact to the mailjetstream
router.post('/', async (req, res) => {
    try {
        const adData = await Ad.create(req.body);

        const result = await mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "dlalmondo@gmail.com",
                Name: "Mailjet Pilot"
              },
              To: [
                {
                  Email: "dlalmondo@gmail.com",
                  Name: "wrk pls"
                }
              ],
              Subject: req.body.subject,
              HTMLPart: req.body.html
            }
          ]
        });

        console.log(result.body)
        res.status(200).json(adData)

    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
});

module.exports = router;   