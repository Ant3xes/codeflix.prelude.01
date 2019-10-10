module.exports = function countSubstrings(str = "", substring) {
    let tabSubstrings = str.match(new RegExp(substring, "g")) || []
    return tabSubstrings.length
}