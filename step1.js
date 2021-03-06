var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    // var output = data;
    console.log('Data: ', data,  '\n');
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
  /* Add your code here */

}

getAndPrintHTMLChunks();

