---
layout: post
title: "Project Euler Problem 7"
date: 2016-03-12
categories: project-euler
image: https://unsplash.it/180/180?image=1068
---

10001st Prime Number

This [problem](https://projecteuler.net/problem=7) ask for the 10001st prime number. A prime number is any natural number greater than one and only divisible evenly by one and itself. The challenge, because obviously all real numbers are evenly divisible by one and themselves, is to figure out a way to check if that number doesn't also divide evenly by any other number between 1 and itself.

I started by setting up an empty prime numbers array and a for loop starting at 2 (the first prime number) to run until the 10,001st prime number is reached.

{% highlight js %}
var primesArray = []

for (var possiblePrime = 2; primesArray.length < 10001; possiblePrime++) {

}
{% endhighlight %}

Within the for loop I set up a boolean set to true and if it remains true after checking if the number is a prime, it will add that "possiblePrime" number to the primesArray.

{% highlight js %}
var primesArray = []

for (var possiblePrime = 2; primesArray.length < 10001; possiblePrime++) {

  var isPrime = true

  if (isPrime) {
    primesArray.push(possiblePrime)
  }

}
{% endhighlight %}

Then I set up an inner for loop to check if that "possiblePrime" number is actually a prime.

{% highlight js %}
var primesArray = []

for (var possiblePrime = 2; primesArray.length < 10001; possiblePrime++) {

  var isPrime = true

  for (var i = 2; i <= Math.sqrt(possiblePrime); i++) {
    if (possiblePrime % i === 0) {
      isPrime = false
    }
  }

  if (isPrime) {
    primesArray.push(possiblePrime)
  }

}
{% endhighlight %}

Here the loop starts at two and will run until it's less than or equal to the square root of the "possiblePrime". I used the square root instead of running the loop for every number between 2 and "possiblePrime" because it's faster. If the "possiblePrime" divides evenly with any number between 2 and its square root then there is no point to keep checking because that number is not a prime. In this case, if that happens, the isPrime variable becomes false and the next block won't run. The outer loop increments by one and the process starts all over.

Here is the final solution wrapped in a function:

{% highlight js %}
function nThPrimeNumber(n) {

  var primesArr = []

  for (var possiblePrime = 2; primesArr.length < n; possiblePrime++) {

    var isPrime = true

    for (var i = 2; i <= Math.sqrt(possiblePrime); i++) {
      if (possiblePrime % i === 0) {
        isPrime = false
      }
    }

    if (isPrime) {
      primesArr.push(possiblePrime)
    }

  }

  return primesArr[primesArr.length - 1]
}
{% endhighlight %}
