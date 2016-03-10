---
layout: post
title: "Project Euler Problem 4"
date: 2016-03-04
categories: project-euler
---

Largest Palindrome Product

This [problem](https://projecteuler.net/problem=4) asks for the largest palindrome made from the product of two 3-digit numbers. A palindrome is something that reads the same backward and forward. So the largest palindrome made from the product of two 2-digit numbers it 9009 = 99 * 91.

Each number less than 1000 must be multiplied with another number less than 1000, so a nested for loop.

{% highlight js %}
for (var i = 100; i < 1000; i++){
  for (var j = 100; j < 1000; j++){
    var k = i * j
  }
}
{% endhighlight %}

Each i is multiplied with j. So 1 * 1, 1 * 2 ... 1 * 999, 2 * 1, 2 * 2 ... 2 * 999, and so on.

Inside the loop it should check if the number is a palindrome. It saves the product of i and j to the variable k. Then it checks if k reverse is equal to k. If that's true it will push k to the palArray.
{% highlight js %}
var palArray = []

for (var i = 100; i < 1000; i++){
  for (var j = 100; j < 1000; j++){
    var k = i * j
    if (Number(k.toString().split('').reverse().join(''))=== k){
      palArray.push(k)
    }
  }
}
{% endhighlight %}

Then I created another for loop to return the answer - the largest palindrome number in the palArray

{% highlight js %}
for (var m = 0; m < palArray.length; m++){
  var ans = Math.max.apply(0, palArray)
}
{% endhighlight %}

In the end I split out the logic to reverse the number in its own function and wrapped everything inside another function.

{% highlight js %}
function largestPalindrome(a) {
  var palArray = []

  function reverseNum(x){
    return Number(x.toString().split("").reverse().join(""))
  }

  for (var i = (a/10);  i < a;  i++) {
    for (var j = (a/10); j < a; j++) {
      var k = i * j
      if (reverseNum(k) === k) {
        palArray.push(k)
      }
    }
  }

  for (var i = 0; i < palArray.length; i++) {
    var ans = Math.max.apply(0, palArray)
  }
  return ans
}
{% endhighlight %}

This largestPalindrome function takes an argument and returns its largest palindrome from the product of however many digits specified in the argument. So if 1000 it's 3 digits, 100 it's 2 digits etc.

I don't think this code is very elegant or efficient, but it does return the right answer. Please feel free to contact me if there is a better way to do this.
