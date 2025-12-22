/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    
    let totalSum = 0;
    for (let n of nums) {
        totalSum += n;
    } if (totalSum % 2 === 0) {
        return nums.length - 1;
    } else {
        return 0;
    }
};