

var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
  
    const len = nums.length;
  
    if (len % 2 === 0) {
      return nums[len / 2]
    } else {
      return nums[(len - 1) / 2]
    }
  };