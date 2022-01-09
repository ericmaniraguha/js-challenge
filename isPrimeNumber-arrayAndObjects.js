const prompt = require("prompt-sync")();

var a = [3, 5, 9, 6, 29, 35, 6, 5, 23, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
var prime = [];

function isPrimeNumber(item) {
    var identifier = item / 2;

      for (var i = 2; i <= identifier; i++) {
       if ((item % i) == 0) { 
        return false;
       } 
     }
     return true;
}

for (var i = 0; i < a.length; i++) {
  if (isPrimeNumber(a[i])) {
      prime.push(a[i])
  }
}
console.log(prime);


