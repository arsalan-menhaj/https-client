var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


function print_1337(string) {
  var newString = '';
  for ( var i = 0 ; i < string.length ; i++ ) {
    if ( string[i] == 'a') {
      newString += '4';
    } else if ( string[i] == 'e') {
      newString += '3';
    } else if ( string[i] == 'o') {
      newString += '0';
    } else if ( string[i] == 'l') {
      newString += '1';
    } else if ( string[i] == 's') {
      newString += '5';
    } else if ( string[i] == 't') {
      newString += '7';
    } else if ( string[i] == 'c' && string[i+1] == 'k' ) {
      newString += 'x';
      i++; // To skip the next letter
    } else if ( string[i] == 'e' ) {
      if ( string[i+1] == r ) {
        newString += '0r';
        i++; // To skip the next letter
      } else {
        newString += '3';
      }
    } else if ( string[i] == 'y' && string[i+1] == 'o' && string[i+2] == 'u' ) {
      newString += 'j00';
      i += 2; // To skip the next two letters
    } else {
      newString += string[i];
    }
  }
  console.log(newString);
}

getHTML(requestOptions,print_1337);