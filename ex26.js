module.exports = function(str=''){
    if(str.search(/[^A-Za-z\s]/) != -1) {
        return false;
    }
    return true;
}