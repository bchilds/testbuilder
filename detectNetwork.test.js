/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() { //2 tests
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() { //2 tests
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() { //3 tests
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() { //5 tests
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() { //16 tests
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert;

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011123456781234') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    assert(detectNetwork('6011123456781234123') === 'Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6511123456781234') === 'Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    assert(detectNetwork('6511123456781234123') === 'Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++ ) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix +'1234567812345') === 'Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(prefix +'1234567812345123') === 'Discover');
      });
    })(prefix)
  }



});

describe('Maestro', function() { // 32 tests
  var assert = chai.assert;
  var cardNums = ['50181234123','50201234123', '50381234123', '63041234123']; //all 11 chars


  for (var i = 0; i <= 7; i++ ){
    it('has a prefix of ' + cardNums[0].slice(0,4) + ' and a length of ' + (cardNums[0].length + i + 1), function(){
      assert ( detectNetwork( cardNums[0] += i.toString() ) === 'Maestro' );
    });
  }

  for (var i = 0; i <= 7; i++ ){
    it('has a prefix of ' + cardNums[1].slice(0,4) + ' and a length of ' + (cardNums[1].length + i + 1), function(){
      assert ( detectNetwork( cardNums[1] += i.toString() ) === 'Maestro' );
    });
  }

  for (var i = 0; i <= 7; i++ ){
    it('has a prefix of ' + cardNums[2].slice(0,4) + ' and a length of ' + (cardNums[2].length + i + 1), function(){
      assert ( detectNetwork( cardNums[2] += i.toString() ) === 'Maestro' );
    });
  }

  for (var i = 0; i <= 7; i++ ){
    it('has a prefix of ' + cardNums[3].slice(0,4) + ' and a length of ' + (cardNums[3].length + i + 1), function(){
      assert ( detectNetwork( cardNums[3] += i.toString() ) === 'Maestro' );
    });
  }

  // Needs to cover card length range 12, 13, 14, 15, 16, 17, 19, and for each of those prefixes of 5018, 5020, 5038, 6304
  //for loop to cover all these
  /*for(var i = 12; i <= 19; i++){ //loop through all card number lengths.
    (function(i, cardNums){       
      it('has a prefix of ' + cardNums[0].slice(0,4) + ' and a length of ' + cardNums[0], function(){
        //assert( detectNetwork(cardNums[0]) === 'Maestro' );
        detectNetwork(cardNums[0].toString()).should.equal('Maestro');
      });
      it('has a prefix of ' + cardNums[1].slice(0,4) + ' and a length of ' + cardNums[1].length, function(){
        assert( detectNetwork(cardNums[1]) === 'Maestro' );
      });
      it('has a prefix of ' + cardNums[2].slice(0,4) + ' and a length of ' + cardNums[2].length, function(){
        assert( detectNetwork(cardNums[2]) === 'Maestro' );
      });
      it('has a prefix of ' + cardNums[3].slice(0,4) + ' and a length of ' + cardNums[3].length, function(){
        assert( detectNetwork(cardNums[3]) === 'Maestro' );
      });

       })(i, cardNums)

      cardNums[0] += '' + 4;

    }*/
});


describe('should support China UnionPay')
describe('should support Switch')
