// THANK U
let lowerCaseLimit = 122
let upperCaseLimit = 90

function rot13(message) {
  let decoded = '';
  message = message.split('');
  message.forEach((char) => {

    if(char == char.toUpperCase()) { // is uppercase
      decoded += decode(char, upperCaseLimit)
    } else if (char == char.toLowerCase()) { // is lowecasecase
      decoded += decode(char, lowerCaseLimit)
    }
  });
  
return decoded.split(' ').map(letter => letter.replace('undefined','z')).join(' ')
}

function decode(char, limit){
        let encodedChar = '';
        if (char.match(/[| \\/~^.:,;?!&%$@*+()]/)){ // handle special characters & numbers
          return char;
        } else if (/\d/.test(char)){
          return char;
        // check if rot13 char code is greater than it case limit 
        } else if ((char.charCodeAt(0) + 13) > limit) {
          encodedChar = String.fromCharCode((char.charCodeAt(0) - 13))
          return encodedChar
        }  else if ((char.charCodeAt(0) + 13) < limit){
          encodedChar = String.fromCharCode(char.charCodeAt(0) + 13);
          return encodedChar;
        } 
}