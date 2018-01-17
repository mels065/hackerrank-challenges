#!/bin/ruby
NUM_OF_CHALLENGES = 3

def solve(a0, a1, a2, b0, b1, b2)
    # Complete this function
    alice = [a0, a1, a2]
    bob = [b0, b1, b2]

    a_score = 0
    b_score = 0
    (0...NUM_OF_CHALLENGES).each do |i|
        if alice[i] > bob[i]
            a_score += 1
        elsif alice[i] < bob[i]
            b_score += 1
        end
    end

    return a_score, b_score
end

a0, a1, a2 = gets.strip.split(' ')
a0 = a0.to_i
a1 = a1.to_i
a2 = a2.to_i
b0, b1, b2 = gets.strip.split(' ')
b0 = b0.to_i
b1 = b1.to_i
b2 = b2.to_i
result = solve(a0, a1, a2, b0, b1, b2)
print result.join(" ")
