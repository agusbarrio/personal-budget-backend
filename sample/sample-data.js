const fs = require('fs'),
  sampleData = () => {
    const sampleOperations = JSON.parse(
      fs.readFileSync(__dirname + '/sample-data.json', 'utf8')
    );
    sampleOperations.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    return sampleOperations;
  };

module.exports = sampleData;
