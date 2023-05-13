const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("index");
});

router.get('/carousel', (req, res) => {
    res.render("carousel");
});

module.exports = router;