const Router = require("express");
const { getAllUser, createUser, getUserByID, updateUserByID, deleteUserByID } = require("../controller/userController");

const router = Router();

router
    .route("/")
    .get(getAllUser)
    .post(createUser);

router
    .route(":userId")
    .get(getUserByID)
    .put(updateUserByID)
    .delete(deleteUserByID);

module.exports = router;