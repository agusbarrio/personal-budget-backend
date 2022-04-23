const fs = require('fs'),
  sampleData = () => {
    const sampleOperations = JSON.parse(
      fs.readFileSync(__dirname + '/sample-data.json', 'utf8')
    );
    return sampleOperations;
  };

module.exports = sampleData;
