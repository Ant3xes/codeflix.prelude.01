var paragraph = 'The quick brown fox jumps over the lazy dog. AA barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

//Permet de trouver chaque lettre en majuscule dans une chaine de caractère