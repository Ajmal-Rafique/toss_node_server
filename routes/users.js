var express = require('express');
var router = express.Router();

const usersList = [
    {
        "id": 1,
        "userName": "Muhammad Ajmal Rafique"
    },
    {
        "id": 2,
        "userName": "Muhammad Ali Raza"
    },
    {
        "id": 3,
        "userName": "Ahmed Khan"
    }
  ]

/* GET Activities listing. */
router.get('/', function(req, res, next) {
  res.send(usersList);
});

module.exports = router;
