---
layout: post
title: "Project Euler Problem 8"
date: 2016-03-14
categories: project-euler
image: https://unsplash.it/180/180?image=1081
---

Largest Product in a Series

For this [problem](https://projecteuler.net/problem=7) you are given a 1000 digit number, and you're asked to find the value of thirteen adjacent numbers that have the greatest product.

I started by wrapping the number in quotes to make it a string because the toString() method returned infinity. Then I split the string and used the array map method to get an array of each digit.

{% highlight js %}
var thousandDigits = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'

var thousandDigitsArray = thousandDigits.split('').map(function(t){
    return parseInt(t)
})
{% endhighlight %}

The map method will create a new array by running a specific function on each element of the original array. In this case it will return an array of number elements instead of string.

Then I created an empty array which will hold the product of each 13 digit number and a loop to iterate over the "thousandDigitsArray". It will stop when it reaches the first number of the last 13 digits (array.length - 12).

{% highlight js %}
var productsArray = []

for (var i = 0; i < thousandDigitsArray.length - 12; i++) {

}
{% endhighlight %}

Inside the loop I used the array slice method to get 13 digits starting at index "i". Then I used the reduce method on that to multiply each of the 13 numbers together. The result is then pushed to the "productsArray".

{% highlight js %}
var productsArray = []

for (var i = 0; i < thousandDigitsArray.length - 12; i++) {

  var thirteenDigits = thousandDigitsArray.slice(i, (i+13))

  var thirteenDigitsProduct = thirteenDigits.reduce(function(currNum, nextNum) {
    return currNum * nextNum
  })

  productsArray.push(thirteenDigitsProduct)
}
{% endhighlight %}

To get the max value I used [Math.max.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) which calls a function with a given "this" value, and a single array of arguments. In this case the productsArray.

{% highlight js %}
return Math.max.apply(null, productsArray)
{% endhighlight %}

And here's the final solution wrapped in a function which accepts an argument "n" for the number of adjacent digits.

{% highlight js %}
var thousandDigits = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'

var thousandDigitsArray = thousandDigits.split('').map(function(t){
    return parseInt(t)
})

function biggestProductOfAdjacentDigits(n) {
  var productsArray = []

  for (var i = 0; i < thousandDigitsArray.length - (n-1); i++) {

    var nDigits = thousandDigitsArray.slice(i, (i+n))

    var nDigitsProduct = nDigits.reduce(function(currNum, nextNum) {
      return currNum * nextNum
    })

    productsArray.push(nDigitsProduct)
  }

  return Math.max.apply(null, productsArray)
}
{% endhighlight %}
