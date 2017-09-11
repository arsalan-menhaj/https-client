module.exports = function getHTML (options, callback) {
    var https = require('https');

    /* Your code here */
    var output = '';

    https.get(options, function (response) {

     // set encoding of received data to UTF-8
     response.setEncoding('utf8');

     // the callback is invoked when a `data` chunk is received
     response.on('data', function (data) {
       console.log('Chunk Received. Length:', data.length);
       output += data;
     });

     response.on('end', function() {
       callback(output);
     });

    });
};

