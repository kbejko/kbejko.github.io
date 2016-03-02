---
layout: post
title: "Project Euler Problem 2"
date: 2016-03-02
categories: project euler
---

#### Even Fibonacci Numbers

This [problem](https://projecteuler.net/problem=2) asks for a list of Fibonacci numbers with its last term being less than or equal to 4,000,000. Each Fibonacci term or number is calculated by adding its previous two terms. The problem also asks to start the list with 1 and 2 as the first two terms. So the next term would be 3 (1+2), the one after that 5 (2+3) and so on. The problem ultimately asks to find the sum of the even-valued terms.

I divided the problem into 3 parts. For the first part I created two variables, one an array with the first two terms of the Fibonacci sequence, and a counter variable starting at index 2. I used a while loop to check if the last number in the array is less than or equal to 4,000,000. If that's the case, it will push the result of adding the previous two terms to the end of the array. Then the counter is incremented by 1.

{% highlight js %}
var fibNumbers = [1, 2]
var counter = 2

while (fibNumbers[fibNumbers.length - 1] <= 4000000) {
  fibNumbers.push(fibNumbers[counter - 1] + fibNumbers[counter - 2])
  counter += 1
}
{% endhighlight %}

For the second part, I created an empty array for even Fibonacci numbers. I looped over the fibNumbers array to check if the value at each index was even. If true, that number is pushed to the even numbers array.

{% highlight js %}
var evenFibNumbers = []

for (var i = 0; i < fibNumbers.length; i++) {
  if (fibNumbers[i] % 2 === 0) {
    evenFibNumbers.push(fibNumbers[i])
  }
}
{% endhighlight %}

For the third step, I created a total variable and set it equal to the sum of the evenFibNumbers array.

{% highlight js %}
var total = evenFibNumbers.reduce(function(previousValue, currentValue){
  return previousValue + currentValue
})
{% endhighlight %}

I used the built-in array method reduce which accumulates each value in the array from left to right and reduces it to a single value. Here the callback is invoked for each index of the evenFibNumbers array starting at index 1. It adds the previous value (current index - 1) with the value at current index. The return value is the result of the last callback invocation. This is similar to looping over the array like the following:

{% highlight js %}
var total = 0

for (var x = 0; x < evenFibNumbers.length; x++){
  total += evenFibNumbers[x]
}
{% endhighlight %}

After breaking the problem down, I decided to put all these components together and wrap them in a function.

{% highlight js %}
function totalEvenFibs(n){
  var counter = 2
  var fibNumbers = [1, 2]
  var total = 0


  while (fibNumbers[fibNumbers.length-1] <= n) {
    fibNumbers.push(fibNumbers[counter-1] + fibNumbers[counter-2])
    if (fibNumbers[counter] % 2 === 0) {
      total += fibNumbers[counter]
    }
    counter += 1
  }
  return total
}
{% endhighlight %}

This is essentially the same code as before except I didn't use the reduce method and didn't create an array of even Fibonacci numbers. This function accepts an argument n for the last Fibonacci value. It calls a while loop on the fibNumbers array. For each iteration it adds the previous two values and pushes its result at the end of the array. Then it checks for the value at the current index to be even, if true it increments the total variable by that value. When it's finished it returns the total of all even Fibonacci values less than the argument n.

Undoubtedly there are more elegant solutions, but this is mine for now.
