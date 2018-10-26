const Validator = require('validator');
const isEmpty = require('./is-empty');



module.exports = function validateHistoryInput(data) {
    let errors = {};
  
    data.title = !isEmpty(data.title) ? data.title : '';
  
    if (!Validator.isLength(data.title, { min: 3, max: 50 })) {
      errors.title = 'Event title must be between 3 and 50 characters';
    }

    if (Validator.isEmpty(data.title, { min: 10, max: 300 })) {
      errors.title = 'Event title is required';
    }

    //add validators as we go!
    // if (!Validator.isLength(data.description, { min: 3, max: 50 })) {
    //   errors.description = 'Event title must be between 3 and 50 characters';
    // }

    // if (Validator.isEmpty(data.description)) {
    //   errors.description = 'Event description must be between 10 and 300 characters';
    // }

    // if (Validator.isArray(data.location)) {
    //   errors.location = 'Event location is required';
    // }

    // if (Validator.isLength(data.picture)) {
    //   errors.picture = 'Event picture is required';
    // }

    // if (Validator.isEmpty(data.eventDate)) {
    //   errors.EventDate = 'Event date is required';
    // }
  
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };