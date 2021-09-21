var express = require('express');
var router = express.Router();

const cardsData = [
  {
    "userId": 1,
    "goldType": {
      "rewardType": "Gold Badge",
      "rewardPoints": 175,
      "rewardImg": "./images/reward_gold.png",
      "params": [
        "TimeSheet Submission",
        "Weekly Hours",
        "Check-Out",
        "Good Work in Project"
      ]
    },
    "silverType": {
      "rewardType": "Silver Badge",
      "rewardPoints": 155,
      "rewardImg": "./images/reward_silver.png",
      "params": [
        "Participation in TEO Lounge",
        "Timesheet Accuracy",
        "Weekly Hours",
        "Good Work in Project"
      ]
    },
    "bronzeType": {
      "rewardType": "Bronze Badge",
      "rewardPoints": 140,
      "rewardImg": "./images/reward_bronze.png",
      "params": [
        "Daily Scrum Meetings",
        "TEO Initiatives",
        "Check-In",
        "Tasks Updation"
      ]
    }
  },
  {
    "userId": 2,
    "goldType": {
      "rewardType": "Gold Badge",
      "rewardPoints": 175,
      "rewardImg": "./images/reward_gold.png",
      "params": [
        "TimeSheet Submission",
        "Weekly Hours",
        "Check-Out",
        "Good Work in Project"
      ]
    },
    "silverType": {
      "rewardType": "Silver Badge",
      "rewardPoints": 155,
      "rewardImg": "./images/reward_silver.png",
      "params": [
        "Participation in TEO Lounge",
        "Timesheet Accuracy",
        "Weekly Hours",
        "Good Work in Project"
      ]
    },
    "bronzeType": {
      "rewardType": "Bronze Badge",
      "rewardPoints": 140,
      "rewardImg": "./images/reward_bronze.png",
      "params": [
        "Daily Scrum Meetings",
        "TEO Initiatives",
        "Check-In",
        "Tasks Updation"
      ]
    }
  },
  {
    "userId": 3,
    "goldType": {
      "rewardType": "Gold Badge",
      "rewardPoints": 175,
      "rewardImg": "./images/reward_gold.png",
      "params": [
        "TimeSheet Submission",
        "Weekly Hours",
        "Check-Out",
        "Good Work in Project"
      ]
    },
    "silverType": {
      "rewardType": "Silver Badge",
      "rewardPoints": 155,
      "rewardImg": "./images/reward_silver.png",
      "params": [
        "Participation in TEO Lounge",
        "Timesheet Accuracy",
        "Weekly Hours",
        "Good Work in Project"
      ]
    },
    "bronzeType": {
      "rewardType": "Bronze Badge",
      "rewardPoints": 140,
      "rewardImg": "./images/reward_bronze.png",
      "params": [
        "Daily Scrum Meetings",
        "TEO Initiatives",
        "Check-In",
        "Tasks Updation"
      ]
    }
  },

]


/* GET cardsData listing. */
router.get('/', function(req, res, next) {
    res.send(cardsData);
});

module.exports = router;
