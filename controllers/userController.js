const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

exports.getUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: null,
  });
};
