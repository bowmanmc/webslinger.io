---
layout: post
title:  'Building WebSlinger.io - Github Hosting'
author: '<a href="http://www.twitter.com/webslingerm">Michael Bowman</a>'
excerpt: "Did you know you can host static pages on GitHub for free? With a
          little bit of configuration, you can even host them while using
          your own domain name. In this post, I'll show you how to set it all up."
---

<div class="post-image">
    <img src="/assets/2015-vla.jpg" alt="Very Large Array" />
    <div class="credit">
        Image courtesy of NRAO/AUI
        <a href="http://images.nrao.edu/Telescopes/VLA/92">VLA at Sunset</a>
    </div>
</div>

<p class="typl8-drop-cap">
<a href="https://github.com">GitHub</a> is an awesome resource for developers.
Besides providing a safe, secure, organized place to store the source code for
your projects, it also has a way publish static files to the web.
I use it for this site, and in this post, I'll show you how I set it up.
</p>

The first step is to create a github account and repository.
GitHub has
the best step-by-step instructions on how to do this. Go to their
[help site](https://help.github.com)
and follow the
[Setup Git](https://help.github.com/articles/set-up-git) and
[Create a Repo](https://help.github.com/articles/create-a-repo) guides.
Once you have a repository created and checked out on your local machine, you'll
use a feature called
[GitHub Pages](https://help.github.com/articles/user-organization-and-project-pages/#project-pages)
to serve static files out to your users.
This feature of GitHub will automatically publish anything checked into a
specially named branch (gh-pages) to a url corresponding to your project name.

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
If you have problems, wait a few minutes and check again (it can sometimes
take a little time for GitHub's publishing scripts to do their work). Also,
be sure you named your branch exactly "gh-pages". This is the special branch
GitHub Pages is looking for. If you're still having problems, check out
the [GitHub Pages Help](https://help.github.com/articles/user-organization-and-project-pages/#project-pages).

<hr />

Ok, the next step is to point your custom domain name at the url we just used.
I manage my domain names through [NameCheap](http://namecheap.com). Your
provider may be different, but the process should be similar. Go to the
management page for your domain name and look for an option called
"URL Forwarding". Here you'll want to create two CNAME entries, one for when
someone enters http://yourAwesomeDomain.com and another one for when
someone enters http://www.yourAwesomeDomain.com. Here's a screenshot of
my entries for webslinger.io:

<div class="post-image">
    <img src="/assets/2015-namecheap-webslinger-urlforwarding.png" alt="CNAME Entries" />
</div>

The final piece of this puzzle is to create a CNAME file next to index.html (in
the root of your project). This file should be named "CNAME" (all caps, with
no extension) and contain your domain name (without the preceding http:// or www).
For example, my CNAME file for this site looks like:
{% highlight bash %}
webslinger.io
{% endhighlight %}

After committing and pushing the CNAME file, you should be able to access your
site at http://yourAwesomeDomain.com and see the index.html in your gh-pages
branch. The source code for this site is on GitHub, so you can always refer
to it for reference and see how my code is setup. My master branch, containing
the raw source code and build files, is at
[https://github.com/bowmanmc/webslinger.io](https://github.com/bowmanmc/webslinger.io)
and the built version of that code (what you're looking at now) is available
in the gh-pages branch at
[https://github.com/bowmanmc/webslinger.io/tree/gh-pages](https://github.com/bowmanmc/webslinger.io/tree/gh-pages).
