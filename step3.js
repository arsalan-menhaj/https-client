var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
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
      console.log(output);
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);