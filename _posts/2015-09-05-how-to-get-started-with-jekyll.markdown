---
layout: post
title:  "How to get started with Jekyll"
date:   2015-09-05 10:56:25
categories: jekyll update
---

First I created a repository on github in the form of username.github.io. This makes the blog available for everyone to read at that url. Every time you push to github, the blog refreshes with new content. It's that simple.

After creating the repository you'll want to enter the following commands in your terminal:

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

I have a sneaky feeling this can be done with less steps, but lets go with this for now and refactor later.

1. Clones the repository to your local machine
2. Changes directory to that repository
3. Installs jekyll
4. Installs jekyll in the current directory
5. Opens all the jekyll files in atom (or the text editor of your choice)
6. Sets your repository as the origin
7. Adds all files to be committed
8. Commits files
9. Pushes files to master on github (after the first one you can simply run ``` git push ```)

Then open jekyll locally by running ``` jekyll serve ``` in the terminal. In your browser type ``` localhost:4000 ``` to see jekyll out of the box.
