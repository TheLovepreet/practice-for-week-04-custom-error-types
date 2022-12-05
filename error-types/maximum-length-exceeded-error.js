const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError{
  constructor(Value,...parms){
    super(...parms);
    this.Value = Value;
    this.message = `Maximum length exceeded by ${this.Value}`; 

    this.name = "MaximumLengthExceededError";

    if(!this.Value){
      this.message = `Maximum length exceeded`;
    }
  }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}