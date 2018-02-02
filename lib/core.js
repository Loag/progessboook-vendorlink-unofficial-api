const request = require("request");
const crypto = require('crypto');

class Api {
  constructor(options) {
    this.vendorId = options.vendorId;
    this.vendorKey = options.vendorKey;
    this.sessionUid = '';
  }
  // funcs 

}

function constructHeaders() {
  let reqTime = new Date();
  let hash = crypto.createHmac('sha1','').update(new Buffer(`${this.vendorId}${this.sessionUid}${this.reqTime}${this.vendorKey}`)).digest('base64');
  return {
    "VL-Authorization": `${this.vendorId}||${hash}`,
    "Date": reqTime,
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
}

function constructPayload(options) {
  let payload = JSON.stringify(options.payload);
  return {
    uri: options.path,
    headers: constructHeaders(),
    method: options.reqType,
    body: payload // when posting must be an array of objects
  };
}

function postRequest(input, callback) {
  request.post(constructPayload(input), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body);
    } else {
      callback({error: err, body: body.Message});
    }
  });
}

function getRequest(input, callback) {
  request.get(constructPayload(input), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body); // contains count, result, and clientmessage
    } else {
      callback({error: err, body: body.Message});
    }
  });
}

function create(options) {
  return new Api(options);
}

module.exports = create;