var oldArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

 var arrSorted = bubbleSort(oldArray);


console.log(arrSorted)

arr = arrSorted.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return true;
  }
  return false;
});

console.log(arr);