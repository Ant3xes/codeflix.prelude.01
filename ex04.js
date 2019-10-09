module.exports = function capitalize(str = "", restToLoweropt=false) {
    if (restToLoweropt == true) {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
    else {
        str = str.charAt(0).toUpperCase() + str.substring(1)
        return str
    }
    
}

