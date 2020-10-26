//============================ PEDAC =================================


/*
PROBLEM
- input: string
- output: amount of positive words, amount of negative words, & sentiment rating

- iterate over the positiveWords and find how many instances there are of each word
- Same for negativeWords
- Then use those two numbers to determine the sentiment rating
- I also need to save the positive & negative words
- Also if a word is repeated, I can re-add it to the list

ALGORITHM
- create two arrays: one to keep positivesFound, one to keep negativesFound
- iterate over positiveWords
  - 

*/

//============================ FUNCTION =================================

let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;



function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g);
  
  let positives = wordList.filter(word => positiveRegex.test(word));
  let negatives = wordList.filter(word => negativeRegex.test(word));

  let rating = positives.length - negatives.length;

  console.log(`There are ${positives.length} positive words in the text.`);
  console.log(`Positive sentiments: ${positives.join(', ')}\n`);
  console.log(`There are ${negatives.length} negative words in the text.`);
  console.log(`Negative sentiments: ${negatives.join(', ')}\n`);
  
  let ratingTitle;

  if (rating > 0) {
    ratingTitle = 'Positive';
  } else if (rating < 0) {
    ratingTitle = 'Negative';
  } else {
    ratingTitle = 'Neutral'
  }

  console.log(`The sentiment of the text is ${ratingTitle}.`);


}

//============================ TEST CASE =================================

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';
sentiment(textExcerpt);

// console output

// console output

// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution
// 
// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death
// 
// The sentiment of the text is Negative.

