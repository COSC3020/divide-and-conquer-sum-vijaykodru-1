# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


The runtime analysis for the algorithm implemented is $\Theta(n)$.

The algorithm starts by checking the number of elements in the given array. If it is $n <= 1$ then it returns either $0$ or the first element in the array. For this the runtime is always constant meaning 1. If there are more than one element in the given array then the algorithm divides the given array into three equal parts meaning 

$T(n) = 3T(n/3) + 1$.

$3T$ in the equation represents how many times the function is called at each iteration and the $n/3$ represents the array being divided into three parts. Asymptotically constants can be neglected. The above recurrence relation becomes:

$T(1) = 1$ when $n <= 1$, $T(n) = 3T(n/3)$ when $n > 1$

Solving for $T(n/3)$ by substituting $n/3$ in $T(n)$

$T(n/3) = 3T(n/9)$

$T(n) = 3(3T(n/9))$ 

$T(n) = 9T(n/9)$

The above continues until the code uses recursion, we get 

$T(n) = 3^i T(n/3^i)$

The recursion stops when the array size becomes 1 meaning $n/3^i = 1$

if we solve for i we get $i = log_3(n)$

substitute this in the above equation we get 

$T(n) = 3^(log_3(n)) * T(n/3^(log_3(n)))$

using logarithmic functions we know that $3^(log_3(n)) = n$

The equation becomes: $T(n) = n * T(1)$, we know that $T(1) = 1$

Therefore the runtime analysis for the code is $\Theta(n)$