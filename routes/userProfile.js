var express = require('express');
var router = express.Router();

const userProfile =  
{
    "userId": 1,
    "totalRewardsDuration": "5Years 2Months",
    "profileDetail": {
            "userName": "Muhammad Ali Raza",
            "userAbout": "a tech lead at TEO intl. since last more than 7 years. Passion for software development. My hobbies are book reading, explore new things related to technology.",
            "userDesignation":"Sr. Software Engineer",
            "userImg": "./images/profile.jpg"
        },
    "totalRewardsDetail": {
            "totalPoints": 15000,
            "totalPointsEarned": 11694,
            "totalGoldPoints": 7694,
            "totalSilverPoints": 2500,
            "totalBronzePoints": 5500
        },
    "overAllEarnReward": {
            "overAllEarnPoints": 11694,
            "overAllEarnBadgeName": "Gold Badge",
            "overAllEarnBadgeImg": "./images/reward_gold.png"
    },
    "durationTotalRewards": [
        "WeeklyTimesheets", "initiatives", "Daily Scrum", "Check-In"
    ]
}


/* GET Activities listing. */
router.get('/', function(req, res, next) {
  res.send(userProfile);
});

module.exports = router;
