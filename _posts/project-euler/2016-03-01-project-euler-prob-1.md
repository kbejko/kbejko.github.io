---
layout: post
title: "Project Euler Problem 1"
date: 2016-03-01
categories: project euler
---

Multiples of 3 and 5

One of the biggest challenges for me has been solving logical coding problems. And admittedly because it has been difficult, I've tended to shy away from them. But I've decided to stop putting it off and start working on [Project Euler](https://projecteuler.net) problems.

I will try to work on one every day, starting today with the first problem [Multiples of 3 and 5](https://projecteuler.net/problem=1).

This problem asks to find the sum of all multiples of 3 or 5 below 1000. So for numbers below 10, multiples of 3 or 5 are 3, 5, 6, 9, and their sum is 23.

First I set up a total variable which will ultimately hold the answer. Anytime I see a keyword like all or each in a problem I think of loops. A for loop is set up to iterate through all the numbers less than 1000.

{% highlight js %}
var total = 0

for (var i = 0; i < 1000; i++) {

}
{% endhighlight %}

Next there is a condition which requires only multiples of 3 or 5 for each number to be added to the total. So within the for loop an if statement is set up to account for this.

{% highlight js %}
var total = 0

for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i
  }
}

console.log(total)
{% endhighlight %}

The if statement is checking for each number "i" if its remainder is 0 when divided by 3 or 5. If that is true then the total variable is incremented by that number "i". After the loop is finished, the total is printed to the console.

This can also be wrapped in a function that takes an argument instead of hard coding the value 1000.

{% highlight js %}
function multiplesOf3Or5(num) {
  var total = 0

  for (var i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i
    }
  }

  console.log(total)
}
{% endhighlight %}
