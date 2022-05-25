"""
    25th May 2022
    
    Question: https://leetcode.com/problems/contains-duplicate/
"""

def contains_duplicate(nums):
    hash_map = {}
    for num in nums:
        if num in hash_map:
            return True
        hash_map[num] = True
    return False

# TC: O(n)
# SC: O(n)

print(contains_duplicate([1,2,3,1])) # True
print(contains_duplicate([1,2,3,4])) # False
print(contains_duplicate([1,1,1,3,3,4,3,2,4,2])) # False


"""
    25th May 2022
    
    Question: https://leetcode.com/problems/two-sum/
"""
def two_sum(nums, target):
    hash_map = {}
    
    for index, num in enumerate(nums):
        subtracted_value = target - num
        if subtracted_value in hash_map:
            return [hash_map[subtracted_value], index]
        hash_map[num] = index
        
print(two_sum([2,7,11,15], 9)) # [0, 1]
print(two_sum([3,2,4], 6)) # [1, 2]
print(two_sum([3,3], 6)) # [0, 1]
print(two_sum([-3,4,3,90], 0)) # [0, 2]