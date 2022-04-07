const fs = require('fs'),
  sampleData = (operationTable) => {
    JSON.parse(
      fs.readFile(__dirname + '/sample-data.json', 'utf-8', (err, data) => {
        data.forEach(async (el) => await operationTable.create(el));
      })
    );
    console.log('Sample data uploaded successfully');
  };

module.exports = sampleData;
