let string =
  'hi, my insta pass is hahahaha123, fb pass is 89jan8439, and email pass is bob456bob ';

let words = [];
let ind1 = 0;
let ind2 = 0;
let res = [];
let passes = [];
let percentages = [];

// Split the string into words
for (let index = 0; index < string.length; index++) {
  let letter = string[index];
  if (letter === ' ') {
    ind2 = index;
    words.push(string.slice(ind1, ind2));
    ind1 = ind2 + 1;
  }
}
words.push(string.slice(ind2 + 1));

// Process each word
let points = 0;

words.forEach((word) => {
  for (let char of word) {
    points += 1;
    if (/\d/.test(char)) {
      // Check if the character is a digit
      points += 4;
    } else if (/[A-Z]/.test(char)) {
      // Check if the character is uppercase
      points += 3;
    }
  }

  let result = points / word.length;
  if (result > 1) {
    passes.push(word.replace(',', ''));
    percentages.push(Math.floor((result / 4) * 100));
  }
  res.push(result);
  points = 0;
});

// Print the results
console.log('\n-------Passwords Found:---------\n');

for (let i = 0; i < passes.length; i++) {
  console.log(`>>  ${passes[i]}     ${percentages[i]} %`);
}
