---
layout: post
title: "Refactor JavaScript"
date: 2016-03-19
categories: jekyll update
image: https://unsplash.it/180/180?image=1076
---

Fair warning, this post was written concurrently while figuring out the code.

To underline the current tab, i.e. if you're reading this the journal tab should be underlined, I had the following code:

{% highlight js %}
(function underlineTab(){
  var home = document.querySelector(".home")
  var journal = document.querySelector(".journal")
  var resources = document.querySelector(".other")

  if (window.location.pathname.indexOf("/journal/") === 0){
     home.classList.remove("active")
     resources.classList.remove("active")
     journal.classList.add("active")
   } else if (window.location.pathname.indexOf("/other/") === 0){
     home.classList.remove("active")
     resources.classList.add("active")
   } else {
     home.classList.add("active")
   }
})();
{% endhighlight %}

Essentially this checks if the path name of the current URL (in this case journal) exists. The string indexOf() method returns the index of the first occurrence of the specified value and -1 if it's not found. So if the current path is "/journal" it will remove the class active from the other tabs and add it to the journal tab. This is ok since I only have 3 tabs, but if there were more, there would be a bunch of if else statements and lots of add/remove class. Not dry.

Then I came up with the following code, a loop that iterates over the tabs and checks if the tab's class name is the same as the current URL path name and adds class active to that tab.

{% highlight js %}
(function underlineCurrentTab(){
  var navLinks = document.querySelector('.nav-links').children
  var pathNameStrip = window.location.pathname.replace(/\//g, '')

  for (var i = 0; i < navLinks.length; i++) {
    if (pathNameStrip === navLinks[i].className) {
      navLinks[i].classList.add('active')
    }
    if (pathNameStrip === ' ' && navLinks[i].className === 'home') {
      navLinks[i].classList.add('active')
    }
  }
})();
{% endhighlight %}

It sets up two variables: the children of the "nav-links" class, the li elements. The other variable holds the current pathname with the slashes stripped from the url path name. This way it makes it easier to compare with the class name of the li element. The last if statement is for the home link because the pathname is just the /, and since that's stripped, it's blank.

This worked, but when I clicked on the article, it no longer shows the journal tab underlined. This is because the path name (/journal/article-title) no longer matches the journal li element class.

So as a final solution I used the following code, again taking advantage of the string indexOf() method.

{% highlight js %}
(function underlineCurrentTab(){
  var navLinks = document.querySelector('.nav-links').children

  for (var i = 0; i < navLinks.length; i++) {
    if (location.pathname.indexOf(navLinks[i].id) >= 0) {
      navLinks[i].classList.add('active')
    }
    if (location.pathname === '/' && navLinks[i].id === "home") {
      navLinks[i].classList.add('active')
    }
  }
})();
{% endhighlight %}

And this worked until I decided to test it by adding a tab that's similar to another. For example I added a tab called "otherthan", and because its index will return something greater than -1, it will also be underlined.

In the end I went back to matching the string exactly with the following code:

{% highlight js %}
(function underlineCurrentTab(){
  var navLinks = document.querySelector('.nav-links').children
  console.log(navLinks)
  var pathName = location.pathname.split('/')[1]
  console.log(pathName)
  for (var i = 0; i < navLinks.length; i++) {
    if (pathName === navLinks[i].id) {
      navLinks[i].classList.add('active')
    }
    if (pathName === '' && navLinks[i].id === "home") {
      navLinks[i].classList.add('active')
    }
  }
})();
{% endhighlight %}

This splits the pathname at the slashes and returns an array. I'm interested in the second item in the array, and I check to match that with the link's id. Unless there are two identical tabs, or they have the same id, which I don't see why, then this should work. It's pretty hacky, and I'm sure there are more elegant solutions, but this is what I've come up with for right now.
