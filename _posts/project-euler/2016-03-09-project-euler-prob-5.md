---
layout: post
title: "Project Euler Problem 5"
date: 2016-03-09
categories: project-euler
image: https://unsplash.it/180/180?image=1061
---

Smallest Multiple

This [problem](https://projecteuler.net/problem=5) asks for the smallest number that can be divided evenly by each number from 1 to 20. I had a difficult time setting this up, so I looked around to see how others had solved it. It essentially boils down to two loops with the outer one running until the answer is found and the inner checking if the number is evenly divisible by each number 1 to 20.

I set up 3 variables outside the loop and a while loop to check if the answer is found.

{% highlight js %}
var isSmallestNumberFound = false
var smallestNumber = 1
var answer

while (isSmallestNumberFound === false) {

  smallestNumber += 1
}
{% endhighlight %}

The isSmallestNumberFound variable is set to false and it will remain false until the answer is found. The smallestNumber variable will ultimately be the answer. It will be incremented inside the while loop until it passes all tests.

Next inside the while loop there is a for loop for the numbers 1 through 19 and it checks if the smallestNumber is divisible evenly by each. If it's not, it breaks out of the for loop and it moves to the next block of code.

{% highlight js %}
var isSmallestNumberFound = false
var smallestNumber = 1
var answer

while (isSmallestNumberFound === false) {

  for (var i = 1; i < 20; i++) {
    if (smallestNumber % i !== 0) {
      break
    }
  }

  smallestNumber += 1
}
{% endhighlight %}

The next block checks if the smallestNumber divides evenly by whatever i was when it broke out of the for loop. And it doesn't because that's the reason the for loop stopped in the first place. So this block essentially checks for the last divisor, in this case 20.

{% highlight js %}
var isSmallestNumberFound = false
var smallestNumber = 1
var answer

while (isSmallestNumberFound === false) {

  for (var i = 1; i < 20; i++) {
    if (smallestNumber % i !== 0) {
      break
    }
  }

  if (smallestNumber % i === 0) {
    isSmallestNumberFound = true
    ans = smallestNumber
  }

  smallestNumber += 1
}

console.log(answer)
{% endhighlight %}

So if the last smallestNumber after being evenly divisible by 1 to 19 is true, then it goes to the next block and checks if that number is evenly divisible by 20 (i is now 20 because for i to stop the loop it needed to be greater than 19 because of the incrementation.) If that's true it will set the isSmallestNumberFound variable to true, so it stops the while loop and sets the answer variable to that smallestNumber.

Final solution wrapped in a function:

{% highlight js %}
function smallestMultiple(num) {  
  var isSmallestNumberFound = false
  var smallestNumber = 1
  var answer

  while (isSmallestNumberFound === false) {

    for (var i = 1; i < 20; i++) {
      if (smallestNumber % i !== 0) {
        break
      }
    }

    if (smallestNumber % i === 0) {
      isSmallestNumberFound = true
      ans = smallestNumber
    }

    smallestNumber += 1
  }

  return answer
}
{% endhighlight %}
