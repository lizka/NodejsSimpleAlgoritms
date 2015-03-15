function findCombinationsCount(amount, coins, i) {
    if (amount == 0) return 1;  // [1]
    else if (amount < 0 || coins.length == i) return 0;//[2]
    else if (coins[i] > amount) { //optimization when amount is negative
        return 0; //[3]
    }
    //Explanation for input : 2 when we expected two combinations: 1+1, 2
    var withFirstCoin = findCombinationsCount(amount - coins[i], coins, i);
    var withoutFirstCoin = findCombinationsCount(amount, coins, i + 1);
    //withFirstCoin(2) -> withFirstCoin(1) for i=0 || -> withoutFirstCoin(2) for i=1

    //withFirstCoin(1) -> withFirstCoin(0) for i=0 || -> withoutFirstCoin(1) for i=1
    //-> withFirstCoin(0) -> return 1; , step[1]
    //|| - > withoutFirstCoin(1) -> withFirstCoin(-1) return 0; , step[2]
    //withoutFirstCoin(1) for next i=2 return 0; , step [3]

    //withoutFirstCoin(2) -> withFirstCoin(0) for i=0 || -> withoutFirstCoin(2) for i=1
    //-> withFirstCoin(0) was return 1
    //|| - > withoutFirstCoin(2) -> withFirstCoin(-1) return 0; , step[2]
    //withoutFirstCoin(2) for next i=2 return 0; , step [3]

    return withFirstCoin + withoutFirstCoin;
    //1 (withFirstCoin(1), so 2p) + 1(withoutFirstCoin(2), so 1+1 ) = 2 combinations

}

//Main code
var fs = require('fs');
var argv = require('optimist').argv;

//Read data from file synchronously
var content = fs.readFileSync(argv._[0], 'utf8');

var inputArray = [];
var coins = [1, 2, 5, 10, 20, 50, 100, 200];
inputArray = content.split('\n');

for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] <= 0) console.log('0'); //if input is 0 or less
    else console.log(findCombinationsCount(inputArray[i], coins, 0)); //start from i=0
}

//1 -> 1 [1]
//2 -> 1+1, 2 [2]
//3 -> 1+2, 1+1+1 [2]
//4 -> 2+2, 1+1+1+1, 1+1+2 [3]
//5 -> 1+2+2, 1x5, 1+1+1+2, 5 [4]

