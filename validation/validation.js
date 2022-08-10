const {check, validationResult} = require('express-validator');

exports.validateField = [
  check('name').trim().escape().not().isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),
    check("phone").isLength({min:10,max:10}).withMessage("mobile no should be valid").bail(),
    check("gender").trim().not().isEmpty().withMessage("gender can't be empty").bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];