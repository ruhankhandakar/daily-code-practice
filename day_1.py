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

# after sorting
def get_pivot_point(arr, left,right):
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
    pivot_point = get_pivot_point(arr, left, right)
    
    if pivot_point == k - 1:
        return arr[pivot_point]
    elif pivot_point < k - 1:
        return find_element(arr, pivot_point + 1, right, k)
    else:
        return find_element(arr, left, pivot_point - 1, k)
        

def kth_smallest_element(arr, k):
    left_bound_index = 0
    right_bound_index = len(arr) - 1
    return find_element(arr, left_bound_index, right_bound_index, k)

res = kth_smallest_element([4, 5, 10, 11, 1, 3, 19, 8, 7], 6)
print(res) # 8
