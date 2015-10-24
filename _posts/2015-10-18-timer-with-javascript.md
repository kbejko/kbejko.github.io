---
layout: post
title: "Timer with JavaScript"
date: 2015-10-18
categories: jekyll update
---

#### Or how to build a stop watch that won't impress your friends.

Step one: Don't try to impress them.

Yes in the grand scheme of things this is a blip, but it works. You made it work, and you can be proud of it. You click the start button and it starts counting, you click pause and ... wait for it ... it pauses, then you click reset and it, well you know.

Step two: Let's build.

index.html
{% highlight html%}
 <body>

    <h1 id="timer">Stop Watch</h1>
    <div class="controls">
      <button id="reset">Reset</button>
      <button id="start">Start</button>
      <button id="pause">Pause</button>
    </div>

</body>
{% endhighlight %}

style.css
{% highlight css%}
.controls {
  margin: 50px;
  text-align: center;
}

h1 {
  font-family: monospace;
  font-size: 72px;
  text-align: center;
}

button {
  background: #4479BA;
  color: #FFF;
  font-family: monospace;
  font-size: 50px;
  text-align: center;
  border: 1px solid black;
  margin: 20px;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 2px 2px black;
}

button:hover {
  background: #356094;
}
{% endhighlight %}

timer.js
{% highlight js %}
var seconds = 0;
var timerId;


var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");
{% endhighlight %}
The first two are global variables which are created in the global execution context. This means every function will have access to them.
The next four are also global variables which target the timer buttons.
{% highlight js %}
function startEnable(){
  start.disabled = false;
}
{% endhighlight %}
This function enables the start button to be clicked. I will explain shortly why this is necessary.
{% highlight js %}
function updateTime(){
    seconds++;
    timer.textContent = "Time elapsed: " + seconds;
}
{% endhighlight %}
This function sets a counter for the seconds variable which inserts in the <h1> element with id="timer". It will be used in the functions below to work with the start, pause, and reset buttons.
{% highlight js %}
start.addEventListener("click", function(){
  timerId = setInterval(updateTime, 1000);
  this.disabled = true;
});
{% endhighlight %}
As you might guess this is the start button. It will accept a click event listener. Once the button is clicked it will run the function. This function will set the timerID variable from above to setInterval. [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval#Example) is a built-in JavaScript function which accepts two arguments: a function (the updateTime function in this case) and a fixed time delay in which to run that function (1000 in this case which translates to 1 second). It also disables the button once clicked. This was a bug. It makes it so you can't press the start button more then once. If it's not disabled, it allows you to continuously click on it. It makes the timer go faster because you are repeatedly calling the function. Try running it without the button disabled.
{% highlight js %}
pause.addEventListener("click", function(){
  clearInterval(timerId);
  startEnable();
});
{% endhighlight %}
This pauses the timer. It has access to the timerId global variable which it is able to run in this execution context once this function is invoked. We pass it as an argument to the built-in JavaScript function [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval). clearInterval essentially does the opposite of setInterval. Here we're also using the startEnable function in order to make the start button clickable again.
{% highlight js %}
reset.addEventListener("click", function(){
  clearInterval(timerId);
  seconds = 0;
  timer.textContent = "Stop Watch";
  startEnable();
});
{% endhighlight %}
This function resets the timer. It uses the clearInterval function to stop, then reset the seconds variable to 0, and it changes the <h1> to be called Stop Watch. It also uses the startEnable function so the start button is able to be clicked again.

This code can and will be refactored, but that's for another post.
