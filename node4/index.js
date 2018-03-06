exports.sum = function() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
};
exports.divide = function(a, b) {
    return a / b;
}