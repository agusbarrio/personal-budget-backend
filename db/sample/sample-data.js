const fs = require('fs'),
  sampleData = (operationTable) => {
    fs.readFile(__dirname + '/sample-data.json', 'utf-8', (err, data) => {
      JSON.parse(data).forEach(async (el) => await operationTable.create(el));
    });
    console.log('Sample data uploaded successfully');
  };

module.exports = sampleData;
