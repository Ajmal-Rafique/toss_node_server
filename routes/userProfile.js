var express = require("express");
var router = express.Router();
const fs = require("fs");

const loadUsers = () => {
  const bufferData = fs.readFileSync("./assets/users.json");
  const stringData = bufferData.toString();
  return JSON.parse(stringData);
};

const saveUser = (data) => {
  fs.writeFileSync("./assets/users.json", JSON.stringify(data));
};

const getUsers = () => {
  const users = loadUsers();
  return users;
};

const getUser = (id) => {
  const users = loadUsers();
  const user = users.filter((user) => user.userId == id);
  if (user.length) {
    return user;
  } else {
    return "User not found";
  }
};

const updateUser = (data) => {
    try {
        const users = loadUsers();
        let usersUnique = users.filter((user) => user.userId != data.id);

        let user = getUser(data.id);
        console.log(`user, ${user[0]}`);
        let points = (user[0].totalRewardsDetail.totalPoints + parseInt(data.points));
        user[0].totalRewardsDetail.totalPoints = points;
        user[0].totalRewardsDetail.totalPointsEarned = (user[0].totalRewardsDetail.totalPointsEarned + parseInt(data.points));
        user[0].totalRewardsDetail.totalGoldPoints = (user[0].totalRewardsDetail.totalGoldPoints + parseInt(data.points));
        user[0].overAllEarnReward.overAllEarnPoints = (user[0].overAllEarnReward.overAllEarnPoints + parseInt(data.points));
        
        if( (user[0].totalRewardsDetail.totalPointsEarned * 100) / (user[0].totalRewardsDetail.totalPoints) >= 80) {
            alert("more than 80%")
        }

        console.log(`updated user points value, ${user[0]}, ${points}`)

        usersUnique.push(user[0]);
        saveUser(usersUnique);

        return "User updated!";
    } catch (error) {
        console.log(error)
    }

};

const addUser = (data) => {
  const users = loadUsers();

  users.push(data);
  saveUser(users);

  return "User Added!";
};

/* GET ALL USER */
router.get("/", function (req, res, next) {
  console.log(`${req.params.id}`);
  const user = getUsers(req.params.id);
  res.send(user);
});

/* ADD USER */
router.post("/", function (req, res, next) {
  try {
    console.log(`${req.body}`);

    const data = addUser(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

/* GET USER */
router.get("/:id", function (req, res, next) {
  try {
    console.log(`${req.params.id}`);
    const user = getUser(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

/* UPDATE USER. */
router.put("/", function (req, res, next) {
  try {
    console.log(`${req.body}`);

    const data = updateUser(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
