const log = console.log;

/* 
    25th May 2022
    
    Question: https://leetcode.com/problems/contains-duplicate/
*/

const contains_duplicate = (nums) => {
  const hash_map = {};
  for (const num of nums) {
    if (hash_map[num]) {
      return true;
    }
    hash_map[num] = true;
  }
  return false;
};

// TC: O(n)
// SC: O(n)

log(contains_duplicate([1, 2, 3, 1])); // true
log(contains_duplicate([1, 2, 3, 4])); // false
log(contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

/* 
    Question: https://leetcode.com/problems/two-sum/
*/

const twoSum = (nums, target) => {
  const hashMap = {};
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const subtractedValue = target - num;
    const hashMapValuesIndex = hashMap[subtractedValue];
    if (hashMapValuesIndex != null) {
      return [hashMapValuesIndex, index];
    }
    hashMap[num] = index;
  }
  return [];
};

log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
log(twoSum([3, 2, 4], 6)); // [1, 2]
log(twoSum([3, 3], 6)); // [0, 1]
log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]
