#!/bin/python

import sys
def getPrimaryDiagonalSum(dimension, matrix):
    sum = 0
    for i in xrange(dimension):
        sum += matrix[i][i]

    return sum

def getSecondaryDiagonalSum(dimension, matrix):
    sum = 0
    for i in xrange(dimension):
        j = dimension - 1 - i
        sum += matrix[i][j]

    return sum

def getDiagonalAbsoluteDifference(dimension, matrix):
    return abs(getPrimaryDiagonalSum(dimension, matrix) - getSecondaryDiagonalSum(dimension, matrix))

n = int(raw_input().strip())
a = []
for a_i in xrange(n):
    a_temp = map(int,raw_input().strip().split(' '))
    a.append(a_temp)

print getDiagonalAbsoluteDifference(n, a)
