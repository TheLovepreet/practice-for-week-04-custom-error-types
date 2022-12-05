// Your code here
class ValidationError extends Error{
  constructor(message,...parms){
    super(...parms);
    this.message = message || "Invalid input";
    
    if(Error.captureStackTrace){
      Error.captureStackTrace(this,ValidationError)
    }
    this.name = 'ValidationError';

  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}