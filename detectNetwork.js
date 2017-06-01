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
  var firstThreeNums = cardNumber.slice(0,3);
  var firstFourNums = cardNumber.slice(0,4);
  var firstFiveNums = cardNumber.slice(0,5);
  var firstSixNums = cardNumber.slice(0,6);
  var cardLength = cardNumber.length;
  //Simple series of if statements accomplishes same thing as multiple detection functions, more reliable than Switch
  if( cardLength === 14 && ( firstTwoNums === '38' || firstTwoNums === '39' ) ){ //2 tests
  	return 'Diner\'s Club';
  } else if ( cardLength === 15 && ( firstTwoNums === '34' || firstTwoNums === '37' ) ){ //2 tests
  	return 'American Express';
  } else if ( cardLength === 16 && firstTwoNums === '51' || firstTwoNums === '52' || firstTwoNums === '53' || firstTwoNums === '54' || firstTwoNums === '55' ) { //5 tests
  	return 'MasterCard';
  } else if ( (cardLength === 16 || cardLength === 19) && (firstFourNums === '6011' || firstTwoNums == '65' || (firstThreeNums >= '644' && firstThreeNums <= '649') ) ) { //16 tests
  	return 'Discover'
  } else if ( (cardLength >= 12 && cardLength <= 19) && (firstFourNums === '5018' || firstFourNums === '5020' || firstFourNums === '5038' || firstFourNums === '6304') ) {
  	return 'Maestro';  // 32 tests
  } else if ( (cardLength >= 16 || cardLength <= 19) && 
  	( (firstSixNums >= '622126' && firstSixNums <= '622925') || (firstThreeNums >= '624' && firstThreeNums <= '626') || (firstFourNums >= '6282' && firstFourNums <= '6288') ) ) {
  	return 'China UnionPay';
  } else if ( (cardLength === 16 || cardLength === 18 || cardLength === 19) && 
  	(firstFourNums === '4903' || firstFourNums === '4905' || firstFourNums === '4911' || firstFourNums === '4936' || firstFourNums === '6333' || firstFourNums === '6759' || 
  	firstSixNums === '564182' || firstSixNums === '633110' ) ) { //will return switch before visa due to longer prefixes
  	return 'Switch';
  } else if ( ( cardLength === 13 || cardLength === 16 || cardLength === 19 ) && firstTwoNums[0] === '4' ) { //3 tests
	return 'Visa';
  } else {
  	return 'Card number invalid';
  };

}





