---
layout: post
title:  "How to get started with Jekyll"
date:   2015-09-05 10:56:25
categories: jekyll update
---

First create a repository on github in the form of username.github.io. This makes the blog available for everyone to read at that url. Every time you push to github, the blog refreshes with the new content. It's that simple.

After creating the repository enter the following commands in the terminal:

{% highlight bash linenos %}
git clone git@github.com:username/username.github.io.git
cd username.github.io
gem install jekyll
jekyll new .
atom .
git remote set-url origin git@github.com:username/username.github.io.git
git add .
git commit -m "Initial commit"
git push origin master
{% endhighlight %}

> 1. Clones the repository locally
2. Changes directory to that repository
3. Installs jekyll
4. Installs jekyll in the existing directory, in this case username.github.io
5. Opens all the jekyll files in atom (or the text editor of choice)
6. Sets the repository as the origin
7. Adds all files to be committed
8. Commits files
9. Pushes files to master on github (after the first one simply run ``` git push ```)

> Then open jekyll locally by running ``` jekyll serve ``` in the terminal. In the browser go to ``` localhost:4000 ``` to see jekyll out of the box.
