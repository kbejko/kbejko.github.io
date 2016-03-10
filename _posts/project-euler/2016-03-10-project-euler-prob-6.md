---
layout: post
title: "Project Euler Problem 6"
date: 2016-03-10
categories: project-euler
---

Sum Square Difference

This [problem](https://projecteuler.net/problem=6) asks for the difference between the sum of squares of the first 100 natural numbers and the square of the sum. So for the first 3 numbers it would be 36 (square of the sum) - 14 (sum of the squares).

First I set up two variables one for the square of sums and the other for sum of squares, both equal to 0, and two loops to calculate each respective value.

{% highlight js %}
var squareOfSum = 0
var sumOfSquares = 0

for (var i = 1; i <= 100; i++) {
  squareOfSum += Math.pow(i, 2)
}

for (var j = 1; j <= 100; j++) {
  sumOfSquares += j
}
{% endhighlight %}

The first loop increments the squareOfSum variable by each i squared. The other loop increments the sumOfSquares value by j, so the sum of each number 1 to 100.

Next I set up the answer variable to calculate the difference between the two.

{% highlight js %}
var answer = Math.pow(sumOfSquares, 2) - squareOfSum
{% endhighlight %}

After completing this, I noticed I'm running the same loop twice, so I combined it in one loop, and wrapped it in a function.

Final solution.

{% highlight js %}
function sumSquareDifference(n) {
  var squareOfSum = 0
  var sumOfSquares = 0

  for (var i = 1; i <= n; i++) {
    squareOfSum += Math.pow(i, 2)
    sumOfSquares += i
  }

  var answer = Math.pow(sumOfSquares, 2) - squareOfSum

  return answer
}
{% endhighlight %}
