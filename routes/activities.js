var express = require('express');
var router = express.Router();

const activitiesList = [
    {
        "id": 1,
        "activityName": "Timesheets Submision",
        "points": 20
    },
    {
        "id": 2,
        "activityName": "Weekly Hours",
        "points": 5
    },
    {
        "id": 3,
        "activityName": "ClockIn",
        "points": 5
    },
    {
        "id": 4,
        "activityName": "ClockOut",
        "points": 5
    },
    {
        "id": 5,
        "activityName": "Timesheets Accuracy",
        "points": 5
    },
    {
        "id": 6,
        "activityName": "Daily Scrums",
        "points": 5
    },
    {
        "id": 7,
        "activityName": "Tasks Updation",
        "points": 5
    },
    {
        "id": 8,
        "activityName": "Participation in TEO Lounge",
        "points": 5
    },
    {
        "id": 9,
        "activityName": "TEO Intiatives ",
        "points": 5
    },
    {
        "id": 10,
        "activityName": "Good Work in Projects",
        "points": 5
    }
  ]

/* GET Activities listing. */
router.get('/', function(req, res, next) {
  res.send(activitiesList);
});

module.exports = router;
