// question 1

const regexpGolf = (testStrings, regexes) => {
  console.log(regexes[0]);

  // Testing of each regular expression using test strings
  for (let i = 0; i < regexes.length; i++) {
    const regex = regexes[i];
    console.log(`Testing regex ${i + 1}: ${regex}`);

    //   Test each test string to find their match
    for (const testString of testStrings) {
      const match = regex.test(testString);
      console.log(`  "${testString}" => ${match}`);
    }
  }
};
// Define test strings
const testStrings = [
  "I drive a car and i have a pet which is a cat.",
  "I love listening to pop music.",
  "The have a ferry.",
  "Corona is infectious.",
  "i want to really, check for whitespace characters.",
  "The word letters is a longer than six letters.",
  "Commit is an example of word with the letter E.",
];
// Definition of regular expressions for each

const regexes = [
  /ca[rt]/, // Find matches for 'cat' or 'car'
  /pr?op/, // Find matches for 'prop' or 'pop'
  /ferr(et|y|ari)/, // Find matches for 'ferret', 'ferry', or 'ferrari'
  /\b\w+ious\b/, // Find matches for words ending with 'ious'
  /\s[.,;:]/, // Find matches for whitespace characters followed by a punctuation character
  /\b\w{7,}\b/, // Find matches with words of 7 or more letters
  /\b[^eE\s]+\b/, // Find matches of words that do not contain the letter 'e' or 'E'
];

regexpGolf(testStrings, regexes);

// question 2
const quotingStyle = (sentence) => {
  // declare single to double
  const singleToDoubleQuotePattern = /'([^']+)'/g;
  const singleToDoubleQuoteReplacement = '"$1"';

  // declare double to single
  const doubleToSingleQuotePattern = /(\w)"(\w)/g;
  const doubleToSingleQuoteReplacement = "$1'$2";

  // convert single quote to double quotes
  let updatedStory = sentence.replace(
    singleToDoubleQuotePattern,
    singleToDoubleQuoteReplacement
  );

  // convert double contracted words  to single quote
  updatedStory = updatedStory.replace(
    doubleToSingleQuotePattern,
    doubleToSingleQuoteReplacement
  );

  //   const updatedStory = story
  //     .replace(/'([^']+)'/g, '"$1"')
  //     .replace(/(\w)"(\w)/g, "$1'$2");
  console.log(updatedStory);
};

// string to be formated

const story = `He said, 'I can't believe it!' She replied, 'You're right.'`;
// quotingStyle(story);

const newString = `Maryam said, 'I'm in love with babangida!' Aisha replied, 'She's right!.'`;
// quotingStyle(newString);

// Question 3

const validNumber = (input) => {
  const regexPattern = /^[-+]?(\d+\.\d*|\.\d+|\d+)([eE][-+]?\d+)?$/;

  let message = "";
  // Use the test method to check if the input matches the pattern
  const outPut = regexPattern.test(input);
  if (outPut) {
    // string concantenation method
    // message = input + "This is a Valid Input";
    message = `${input} Is a Valid input`;
  } else {
    message = `${input} Is an invalid input`;
  }
  return message;
};

// Test cases
// console.log(validNumber("-5")); // true
// console.log(validNumber("+3.14")); // true
// console.log(validNumber("0.5")); // true
// console.log(validNumber("5.")); // true
// console.log(validNumber("1e-3")); // true
// console.log(validNumber("1E10")); // true
// console.log(validNumber(".5")); // true
// console.log(validNumber(".")); // false (lone dot)
// console.log(validNumber("abc")); // false (not a valid number)
