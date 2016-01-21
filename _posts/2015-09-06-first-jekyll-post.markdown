---
layout: post
title: "First Jekyll Post"
date: 2015-09-06
categories: jekyll update
---

Today I created my first post (this post) by running `touch _posts/2015-09-06-initial-jekyll-setup.markdown` in the terminal.
It is important to name the files this way: YEAR-MONTH-DAY-title.MARKUP. YEAR has to be 4 digits, MONTH and DAY must be 2 digits, the title seperated by dashes, and the markup file of your choice.

At the top of the file I've included the following YAML front matter (it is important to not forget the dashes):

{% highlight yaml %}
---
layout: post
title: "First Jekyll Post"
date: 2015-09-06
categories: jekyll update
---
{% endhighlight %}

Front matter makes jekyll process the file. In this case it says to use the post layout, the given title, the date created, and categorizes it under what you specify.
