const fs = require('fs'),
  sampleData = async (operationTable) => {
    sampleOperations = await JSON.parse(
      fs.readFileSync(__dirname + '/sample-data.json', 'utf8')
    );

    sampleOperations.forEach(async (el) => await operationTable.create(el));
    console.log('Sample data uploaded successfully');
  };

module.exports = sampleData;
