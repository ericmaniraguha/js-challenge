const arr = [34, 56, 3, 56, 4, 343, 68, 56, 34, 87, 8, 45, 34];

function reverseArr(input) {
    var newArr = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        newArr.push(input[i]);
    }
    return newArr;
}
console.log(reverseArr(arr));
