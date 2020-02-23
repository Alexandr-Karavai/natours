const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    resul: users.length,
    data: {
      users
    }
  });
});

exports.createUser = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: null
  });
};
