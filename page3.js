exports.getDateAndTime = function () {
    return Date();
}

exports.doSomething = function () {
    console.log("module function is called...")
}

exports.addNumbers = function (x,y) {
    var res = x + y;
    console.log("x + y = " + res);
}