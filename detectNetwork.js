// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstTwoNums = cardNumber[0] + cardNumber[1];
  var firstFourNums = cardNumber.split(0,4);
  var cardLength = cardNumber.length;

  //Simple series of if statements accomplishes same thing as multiple detection functions, more reliable than Switch
  if( cardLength === 14 && ( firstTwoNums === '38' || firstTwoNums === '39' ) ){
  	return 'Diner\'s Club';
  } else if ( cardLength === 15 && ( firstTwoNums === '34' || firstTwoNums === '37' ) ){
  	return 'American Express';
  } else if ( ( cardLength === 13 || cardLength === 16 || cardLength === 19 ) && firstTwoNums[0] === '4' ) {
  	return 'Visa';
  } else if ( cardLength === 16 && firstTwoNums === '51' || firstTwoNums === '52' || firstTwoNums === '53' || firstTwoNums === '54' || firstTwoNums === '55' ) {
  	return 'MasterCard';
  } else if ( (cardLength === 16 || cardLength === 19) && (firstFourNums === '6011') ) {
  	return 'Discover'
  } else if ( (cardLength > 11 && cardLength < 20) && (firstFourNums === '5018' || firstFourNums === '5020' || firstFourNums === '5038' || firstFourNums === '6304') ) {
  	return 'Maestro';
  } else {
  	return 'Card number invalid';
  }

};


