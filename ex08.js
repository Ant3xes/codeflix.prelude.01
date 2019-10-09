module.exports = function swapCase(str = "") {
    if(str.match(/([A-Z])/g)) {
        return str.toLocaleLowerCase()
    }
    else if (str.match(/([a-z])/g)) {
        return str.toLocaleUpperCase()
    }
}