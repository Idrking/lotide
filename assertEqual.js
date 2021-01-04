const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log('✅Assertion Passed: ' + actual + ' === ' + expected + '✅');
  } else {
    console.log('❌Assertion Failed: ' + actual + ' !== ' + expected + '❌');
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Dogs are ham', 'Dogs are beef');
assertEqual('I am a baby', 'I am a baby');
assertEqual(2, 2);
assertEqual(2, 112444242);
