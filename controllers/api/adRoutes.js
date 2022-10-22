const router = require('express').Router();
const { Ad, Contact } = require('../../models');
const mailjet = require('../../config/mailjet');
// path /api/ads

//add a contact to the mailjetstream
router.post('/', async (req, res) => {
    try {
        const adData = await Ad.create(req.body);

        const subject = req.body.subject
        const text = req.body.text

        Ad.create({
            subject: subject,
            text: text
        })
        res.status(200).json(adData)

    } catch (err) {
        console.error(err)
        res.status(400).json(err)
    }
});

module.exports = router;