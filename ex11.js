module.exports = function first(str = '', len=1) {
    strLength = str.length - len;
    console.log(strLength);
    return str.slice(strLength);
 }