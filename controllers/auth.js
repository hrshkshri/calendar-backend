const { request, response } = require('express');

const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body;

  // Error handling

  return res.status(201).json({
    ok: true,
    msg: 'new user',
    name,
    email,
    password,
  });
};

const login = (req = request, res = response) => {
  const { email, password } = req.body;

  return res.status(200).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const renewToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: '',
  });
};

module.exports = { createUser, login, renewToken };
