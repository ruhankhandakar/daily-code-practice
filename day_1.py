"""
    24th May 2022
    
    Question: https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1
"""
# Median of first, middle, and last index
def get_pivot_index(arr, left, right):
    mid = (right+left)//2
    pivot = right
    if arr[left] < arr[mid]: 
        if arr[mid] < arr[right]:
            pivot = mid
    elif arr[left] < arr[right]:
        pivot = left
    return pivot

def get_partition(arr, left,right):
    pivotIndex = get_pivot_index(arr, left, right)
    pivotValue = arr[pivotIndex]
    arr[pivotIndex], arr[left] = arr[left], arr[pivotIndex]
    border = left
    
    for i in range(left,right+1):
        if arr[i] < pivotValue:
            border += 1
            arr[i], arr[border] = arr[border], arr[i]
    arr[left], arr[border] = arr[border], arr[left]
    return border

def find_element(arr, left, right, k):
    # Check whether k is still inside the partition
    if k > 0 and k <= (right - left + 1):
        # get the pivot
        pivot_index = get_partition(arr, left, right)
        
        # If k happens to be on the pivot
        if (pivot_index - left == k - 1): 
            return arr[pivot_index]
        
        # if k is on the right side of pivot, apply the solution
        # recursively to the right partition
        if (pivot_index - left > k - 1):   
            return find_element(arr, left, pivot_index - 1, k) 
        
        # else left side and update both k index and left index
        return find_element(arr, (pivot_index + 1), right, (k - pivot_index + left - 1)) 
        

def kth_smallest_element(arr, k):
    left_bound_index = 0
    right_bound_index = len(arr) - 1
    return find_element(arr, left_bound_index, right_bound_index, k)

res = kth_smallest_element([4, 5, 10, 11, 1, 3, 19, 8, 7], 6)
print(res) # 8