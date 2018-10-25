const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEventInput(data) {
    let errors = {};
  
    data.title = !isEmpty(data.title) ? data.title : '';
  
    if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
      errors.title = 'Event title must be between 3 and 50 characters';
    }

    if (Validator.isEmpty(data.title, { min: 10, max: 300 })) {
      errors.title = 'Event title is required';
    }

    if (!Validator.isLength(data.description, { min: 3, max: 50 })) {
      errors.description = 'Event title must be between 3 and 50 characters';
    }

    if (Validator.isEmpty(data.description)) {
      errors.description = 'Event description must be between 10 and 300 characters';
    }

    if (Validator.isEmpty(data.location)) {
      errors.location = 'Event location is required';
    }

    if (Validator.isLength(data.picture)) {
      errors.picture = 'Event picture is required';
    }


    //validation for the date?
  
    // if (Validator.isEmpty(data.date)) {
    //   errors.text = 'Text date is required';
    // }
  
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };