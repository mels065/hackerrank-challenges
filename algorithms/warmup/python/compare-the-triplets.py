#!/bin/python

import sys

def solve(a0, a1, a2, b0, b1, b2):
    A = [a0, a1, a2]
    B = [b0, b1, b2]
    result = [0, 0]
    for i in range(3):
        if A[i] > B[i]:
            result[0] += 1
        elif A[i] < B[i]:
            result[1] += 1

    return result

a0, a1, a2 = raw_input().strip().split(' ')
a0, a1, a2 = [int(a0), int(a1), int(a2)]
b0, b1, b2 = raw_input().strip().split(' ')
b0, b1, b2 = [int(b0), int(b1), int(b2)]
result = solve(a0, a1, a2, b0, b1, b2)
print " ".join(map(str, result))
