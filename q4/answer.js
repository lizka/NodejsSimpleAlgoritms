Array.prototype.unique = function () {
    //Find all unique
    var tempObject = {}, uniqueArray = [];
    for (var i = 0; i < this.length; i += 1)
        tempObject[this[i]] = this[i];
    for (var i in tempObject)
        uniqueArray.push(tempObject[i]);
    return uniqueArray;
};

function getDistinctPowersFromRange(x, y) {
    var powArray = [], power, base;
    base = x;

    while (base <= y) {
        for (power = x; power <= y; power++) {
            powArray.push(Math.pow(base, power)); //x^y
        }
        base++;
    };
    //Return only unique
    return powArray.unique().length;
}

//Main code
var fs = require('fs');
var argv = require('optimist').argv;

//Read data from file synchronously
var content = fs.readFileSync(argv._[0], 'utf8');

//Parse data from file to inputArray(x,y) structure
var inputArray = [];
var contentLines = content.split('\n');
for (var i = 0; i < contentLines.length; i++) {
    var pair = contentLines[i].split(' ');
    inputArray[i] = {};
    inputArray[i].x = pair[0];
    inputArray[i].y = pair[1];
}

for (var i = 0; i < inputArray.length; i++) {
    console.log(getDistinctPowersFromRange(inputArray[i].x, inputArray[i].y));
}

