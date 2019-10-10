module.exports = function count(str = "") {
    let nbCharacters = 0;
    for(let characters of str){
        nbCharacters ++;
    }
    return nbCharacters;
}