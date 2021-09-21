var express = require('express');
var router = express.Router();

const usersList = [
    {
        "id": 1,
        "userName": "Muhammad Ajmal Rafique"
    },
    {
        "id": 2,
        "userName": "Sadiq Ullah"
    },
    {
        "id": 3,
        "userName": "Jennifer Lopez"
    },
    {
      "id": 4,
      "userName": "Muhammad Shahzad Mirza"
    },
    {
      "id": 5,
      "userName": "Ahmed Mazhar Khan"
    },
    {
      "id": 6,
      "userName": "Munsif Hayat"
    },
    {
      "id": 7,
      "userName": "Kashif Mirza"
    },
    {
      "id": 8,
      "userName": "Zafr khan Jmali"
    },
    {
      "id": 9,
      "userName": "Rashid Ali Khan"
    },
    {
      "id": 10,
      "userName": "Abdul Khaliq"
    }
  ]

/* GET Activities listing. */
router.get('/', function(req, res, next) {
  res.send(usersList);
});

module.exports = router;
