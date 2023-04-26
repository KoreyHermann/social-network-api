const router = require("express").Router();
// const { User, Thought } = require('');
const { Thought, User } = require('../../models');
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

router.get('/', (req, res) =>{
  res.send('sending api/user-routes')
})

module.exports = router;