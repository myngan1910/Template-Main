const express = require('express')
const router = express.Router();

const logout = require('../../middleware/logout')


router.get('/',logout.logout);


module.exports = router;