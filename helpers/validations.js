module.exports = objSchemaValidation = (obj, keysArray) => {
  keysArray.forEach((property) => {
    if (!obj.hasOwnProperty(property)) return false;
  });
  for (const key in obj) {
    if (!keysArray.includes(key)) return false;
  }
  return true;
};

const validate = {
  update: (operation) => {
    if (
      validate.objSchema(operation, validate.config.updateFields) &&
      validate.concept(operation.concept) &&
      validate.amount(operation.amount)
    ) {
      return true;
    } else {
      return false;
    }
  },
};
