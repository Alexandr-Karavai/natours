const express = require('express');
const { getUsers, createUser } = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);

router.post('/forgotPassword', authController.forgotPassword);
//router.post('/resetPassword', authController.resetPassword);

router
  .route('/')
  .get(getUsers)
  .post(createUser);

module.exports = router;
