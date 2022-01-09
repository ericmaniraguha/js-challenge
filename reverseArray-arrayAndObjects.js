function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var origin_array = [15,20,1,8,0,45,100,78,45]
var result = reverseArr(origin_array);
console.log(result)