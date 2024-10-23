// Events routes / Events
// host + /api/events
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { validateJWT } = require('../middlewares/jwtValidator');
const { validateFields } = require('../middlewares/fieldsValidator');
const { isDate } = require('../helpers/isDateValidator');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/events');

// High order middleware, all the routes use it
router.use(validateJWT);

router.post(
  '/',
  [
    check('title', 'Title is necessary').not().isEmpty(),
    check('start', 'Start date is not valid').custom(isDate),
    check('end', 'End date is not valid').custom(isDate),
    validateFields,
  ],
  createEvent
);

router.get('/', getEvents);

router.put(
  '/:id',
  [
    check('title', 'Title is necessary').not().isEmpty(),
    check('start', 'Start date is not valid').custom(isDate),
    check('end', 'End date is not valid').custom(isDate),
    validateFields,
  ],
  updateEvent
);

router.delete('/:id', deleteEvent);

module.exports = router;
