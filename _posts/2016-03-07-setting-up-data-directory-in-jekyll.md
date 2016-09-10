---
layout: post
title: "Setting Up Data Directory in Jekyll"
date: 2016-03-07
categories: jekyll update
image: https://unsplash.it/180/180?image=1075
---

The "other" page on this site is used as a catchall to add any projects I am working on, resources I find helpful learning to code, and any miscellaneous people or projects I find inspiring. Because there are only a couple of links for each category I could easily just add it as HTML each time. But if, as I hope, I add more in the future it will become cumbersome to keep adding each link individually. Enter the ```_data``` directory.

Jekyll supports loading data via YAML, JSON, and CSV files located in the ```_data``` directory and accessed with the Liquid templating system. I used YAML and created three files inside the ```_data``` directory for each category.

{% highlight bash %}

├── _data
   ├── miscellaneous.yml
   ├── projects.yml
   └── resources.yml

{% endhighlight %}

Right now inside each file I've just set up name and link url fields. For example, the ```projects.yml``` file currently looks like:

{% highlight yml %}

- name: Book Covers
  url: http://klajdibejko.com/book-covers/

- name: Birthday Card
  url: http://klajdibejko.com/birthday-card/

{% endhighlight %}

Make sure to use spaces not tabs in YAML.

The data is now accessed, in the case of the ```projects.yml``` file, through ```site.data.projects```.

In the ```other.html``` file I've created a loop to iterate through each project and output its name and url.

{% highlight html %}

<div class="projects">
  <h1>Projects</h1>
{% raw %}
  {% for project in site.data.projects %}
    <a href="{{project.url}}">{{project.name}}</a>
  {% endfor %}
{% endraw %}
</div>

{% endhighlight %}

Now all I have to do is add the project link and name, and Jekyll does the rest.  
