---
layout: post
title: "Jekyll Posts in Markdown"
date: 2016-01-06
categories: jekyll update
---

Creating new posts in jekyll is very simple. Run the following command `touch _posts/2015-09-06-some-great-title.md` in the terminal.

It is important to name the files this way: YEAR-MONTH-DAY-title.MARKUP. YEAR has to be 4 digits, MONTH and DAY must be 2 digits, and the title separated by dashes.

At the top of the file include the YAML front matter is included between three dashes.

{% highlight yaml %}
---
layout: post
title: "First Jekyll Post"
date: 2015-09-06
categories: jekyll update
---
{% endhighlight %}

Front matter makes Jekyll process the file. In this case it says to use the post layout, the given title, the date created, and categorizes it under what is specified.
