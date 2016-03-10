---
layout: post
title: "Project Euler Problem 3"
date: 2016-03-03
categories: project-euler
---

Largest Prime Factor

This [problem](https://projecteuler.net/problem=3) asks for the largest prime factor of 600,851,475,143. From [Math is Fun](http://www.mathsisfun.com/prime-factorization.html): a prime number can only be divided evenly by 1 or itself, and it must be a whole number greater than one. So the first prime number is 2. Prime factorization is prime numbers multiplied together to equal the original number, in this case 600,851,475,143. Additionally there is only one unique set of prime factors for any number.

First I created a variable n equal to 600,851,475,143 and set up a for loop with the counter "i" starting at 2, the first prime number. It will run as long as the prime number is less than n or 600,851,475,143 in this case.

{% highlight js %}
var n = 600851475143

for (var i = 2; i <= n; i++) {

}
{% endhighlight %}

Then it checks if 600,851,475,143 divides evenly by the prime number "i". If that's true, n will be set to 600,851,475,143 divided by that prime.

{% highlight js %}
var n = 600851475143

for (var i = 2; i <= n; i++) {
  if (n % i === 0) {
    n /= i
  }
}

console.log(i)
{% endhighlight %}

Once the prime factor is no longer less than or equal to n, it prints that prime factor that stopped the loop.

So I thought. But instead it printed an even number. I tried it with 10 and it printed 6. Ok that's because i is incremented until it's false. So in the case of n = 10, the loop stops at i = 6. So to fix this I ran console.log(i-1) to print one less than i. Or the loop condition can be set up as i < n instead of i <= n. But then I tried n = 100 and that prints 10 which is not a prime. So I realized the way the loop is set up it increments no matter what. I want it continue dividing by the smallest prime until it can't anymore than increment up.

So because I want the prime to increment only if the value is no longer evenly divisible by the prime (the part n % i === 0), I put the increment in an else statement.

{% highlight js %}
var n = 600851475143

for (var i = 2; i <= n; ) {
  if (n % i === 0) {
    n /= i
  } else {
    i += 1
  }
}

console.log(i)
{% endhighlight %}

Or a while loop can be used as well.

{% highlight js %}
var i = 2
var n = 600851475143
while (i <= n) {
  if (n % i === 0) {
    n /= i
  } else {
    i += 1
  }
}

console.log(i)
{% endhighlight %}

Final solution:

{% highlight js %}
function largestPrimeFactor(n){

  for (var i = 2; i <= n; ) {
    if (n % i === 0) {
      n /= i
    } else {
      i += 1
    }
  }

  return i
}
{% endhighlight %}
