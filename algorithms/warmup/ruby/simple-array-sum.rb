#!/bin/ruby

def simpleArraySum(n, ar)
    # Complete this function
    sum = 0
    (0...n).each { |i| sum += ar[i] }
    return sum
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
result = simpleArraySum(n, ar)
puts result;
