/*
PROBLEM
- input: an array of objects
- output: corrected but array of objects

corrections
- replace each country with Canada
- capitalize each word in the name
- remove periods from band name

ALGORITHM
- use forEach to iterate through each obj
  -- obj.country = 'Canada'
  -- obj.name = capitalizeName(obj.name)
  -- obj.name = removeDots(obj.name)

capitalizeNames(str)
- split the name up by spaces
- reassign that word to itself with the first letter upcase
- join and return the name at the end

removeDots(str)
- use replace() to replace . with ''
- return the name back

*/



let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(obj => {
    obj.country = 'Canada';
    obj.name = capitalizeName(obj.name);
    obj.name = removeDots(obj.name);
  });

  return data;
}

function capitalizeName(str) {
  return str.split(' ').map(word => {
    let letter = word[0].toUpperCase();
    return letter + word.slice(1);
  }).join(' ');
}

function removeDots(str) {
  return str.replace(/[.]/, '');
}


console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
