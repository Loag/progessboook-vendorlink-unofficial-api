let api = require('../lib/core')({vendorId: 'demo id', vendorKey: 'demo key'});

api.tryGet((err, data) => {
  console.log(err, data);
});