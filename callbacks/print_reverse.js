var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function print_reverse(html) {
  var newString = '';
  for ( var i = 0 ; i <html.length ; i++ ) {
    newString += html[html.length - i - 1];
    console.log(newString);
  }
}

getHTML(requestOptions,print_reverse);
