---
layout: post
title:  'Building WebSlinger.io - Github Hosting'
author: '<a href="http://www.twitter.com/webslingerm">Michael Bowman</a>'
excerpt: "Did you know you can host static pages on GitHub for free? With a
          little bit of configuration, you can even host them while using
          your own domain name. In this post, I'll show you how to set it all up."
---

<div class="post-banner">
    <img src="/assets/2015-03-06-github-header.png" />
</div>

<p class="typl8-drop-cap">
<a href="https://github.com">GitHub</a> is an awesome resource for developers.
Besides providing a safe, secure, organized place to store the source code for
your projects, it also has a way publish static files to the web.
I use it for this site, and in this post, I'll show you how to set it up.
</p>

The first step is to create a github account and repository. GitHub has
the best step-by-step instructions on how to do this. Go to their
[help site](https://help.github.com)
and follow the
[Setup Git](https://help.github.com/articles/set-up-git) and
[Create a Repo](https://help.github.com/articles/create-a-repo) guides.
Once you have a repository created and checked out on your local machine, you'll
use a feature called
[GitHub Pages](https://help.github.com/articles/user-organization-and-project-pages/#project-pages).
This feature of GitHub will automatically publish anything checked into a
specailly named branch (gh-pages) to a url corresponding to your project name.

To create the GitHub pages branch, open a terminal and navigate to the root
directory for your checked out project. Then type the following:
{% highlight bash %}
git branch gh-pages
git checkout gh-pages
{% endhighlight %}

The first command, "git branch gh-pages", created a gh-pages branch. The second
command, "git checkout gh-pages" switched your local, working source tree to
that branch. Now, let's open a text editor and create an index.html file in
our new branch:
{% highlight html %}
<html>
    <head>
        <title>Howdy</title>
    </head>
    <body>
        <h1>Hello there from GitHub pages!</h1>
    </body>
</html>
{% endhighlight %}

So far, so good. Now, we need to commit our changes and push them to GitHub so
we can see them.

{% highlight bash %}
git add .
git commit
git push --set-upstream origin gh-pages
{% endhighlight %}

This set of commands first adds the new index.html file we created to git,
the commits this revision, then pushes the changes up to GitHub.

Now, open a browser and check http://username.github.io/project, where
"username" is your GitHub username and "project" is the name of your project.
If everything worked correctly, you should the plain index.html we just created
with a title of "Howdy" and a headline saying "Hello there from GitHub pages!".

Ok, the next step is to point your custom domain name at the url we just used.
I manage my domain names through
[NameCheap](http://namecheap.com).
