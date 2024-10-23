// User routes / Auth
// host + /api/auth
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { createUser, login, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/fieldsValidator');
const { validateJWT } = require('../middlewares/jwtValidator');

router.post(
  '/new',
  [
    //middlewares
    check('name', 'Name is mandatory').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must have at least 5 characters').isLength({ min: 5 }),
    validateFields,
  ],
  createUser
);

router.post(
  '/login',
  [
    check('email', 'Not valid email').isEmail(),
    check('password', 'Password length must be greater that 4').isLength({ min: 5 }),
    validateFields,
  ],
  login
);

router.get('/renew', validateJWT, renewToken);

module.exports = router;
