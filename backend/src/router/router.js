const express = require ('express')
const router = express.Router();
const registration = require('../registration/registration');
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

router.use(cors(corsOptions));

router.post('/send-email', registration);

module.exports = router;