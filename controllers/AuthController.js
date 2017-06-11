let express = require('express');
let router = express.Router();

router.get('/test', (request, response) => {
    response.send("merge!");
});

module.exports = router;