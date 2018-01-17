#!/bin/python

import sys

def simpleArraySum(n, ar):
    return sum(ar[:n])
    # Complete this function

n = int(raw_input().strip())
ar = map(int, raw_input().strip().split(' '))
result = simpleArraySum(n, ar)
print(result)
