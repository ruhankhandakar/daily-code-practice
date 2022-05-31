/* 
    Date: 31st May 2022
    Question: https://leetcode.com/problems/remove-duplicates-from-sorted-array
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @desc two pointer approach
 */
const removeDuplicates = (nums) => {
  if (!nums.length) return 0;

  let slow = 0;
  let fast = 1;
  const numsLength = nums.length;

  while (fast < numsLength) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));

console.log("nums -->", nums);

/* 
    First iteration
        slow: 0
        fast: 1

        nums[slow]: 0
        nums[fast]: 0

        fast: 2

    Second iteration
        slow: 0
        fast: 2

        nums[slow]: 0
        nums[fast]: 1

        replace [slow+1] with fast
        fast: 3
        slow: 1

        updated arr: [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

    Third iteration
        slow: 1
        fast: 3

        nums[slow]: 1
        nums[fast]: 1

        fast: 4
*/
