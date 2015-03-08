---
layout: post
title:  "Building WebSlinger.io - Github Hosting"
date:   2015-03-06
author: '<a href="http://www.twitter.com/webslingerm">Michael Bowman</a>'
excerpt: 'This should be the first paragraph of my post about hosting pages on
          github. I want it to be the except for the posts list page, but not
          show above the header image on the posts page.'
---

<img class="post-header-img" src="/assets/2015-03-06-github-header.jpg" />

<p class="typl8-drop-cap">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu diam eu purus rhoncus efficitur id et nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean posuere sem sit amet tellus cursus bibendum. Suspendisse interdum, neque et ullamcorper dapibus, est lorem bibendum lectus, sit amet vehicula ante dui id nisl. Suspendisse nec elit mollis ex blandit fringilla. Aliquam tincidunt vehicula magna, non ultrices quam lobortis ac. Pellentesque varius id dui viverra porta. Nam odio purus, eleifend nec ligula quis, posuere mattis nisi. Mauris euismod pulvinar vestibulum. Nunc a tincidunt magna. Vivamus porta malesuada neque ac pulvinar.
</p>

{% highlight javascript %}
gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.scss', ['sass']);
    gulp.watch([
        'app/index.html',
        'app/_layouts/*.html',
        'app/_includes/*.html',
        'app/_posts/*',
        'app/_config.yml',
        'app/assets/*',
        'app/styles/*.css'
    ], ['jekyll-rebuild']);
    //gulp.watch('app/scripts/**/*.js', ['js']);
    // gulp.watch('src/images/**/*.+(png|jpeg|jpg|gif|svg)', ['images']);
});
{% endhighlight %}

Vivamus suscipit, justo sed viverra luctus, turpis massa convallis purus, a rhoncus diam neque nec urna. Phasellus accumsan hendrerit orci vitae dictum. Vestibulum nec lectus eu nulla fermentum ornare sit amet ut ex. Suspendisse condimentum eros ut lorem tincidunt venenatis. Ut egestas ultrices eros. Ut convallis ultrices cursus. Phasellus vestibulum pellentesque sapien a tincidunt. Phasellus aliquet justo et molestie feugiat. Sed consectetur et felis in pellentesque.

{% highlight html %}
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
{% endhighlight %}

Integer sit amet varius nibh. Nullam sed eros ligula. Duis sollicitudin tellus elit, vitae eleifend nulla sagittis nec. Aenean ac porttitor lacus. Sed tempus arcu in odio ornare porta. Cras tincidunt est nec nisl luctus, id pharetra dui rutrum. Cras lectus diam, venenatis gravida consequat ut, varius id turpis. Suspendisse ut ante eros. Phasellus elementum ex ac ligula aliquet, et rutrum neque interdum. Curabitur a lobortis eros. Sed maximus, erat at pulvinar venenatis, erat libero aliquet metus, ut fermentum urna nisi nec magna. Mauris massa magna, egestas quis facilisis ultrices, iaculis quis ipsum. Pellentesque semper mauris sem, sed pulvinar justo viverra eu. Etiam hendrerit ultrices lobortis. Suspendisse id ante sollicitudin, pellentesque neque et, ullamcorper metus.


Quisque pulvinar sapien sed orci facilisis fermentum. Maecenas consectetur vitae mi quis ullamcorper. Fusce sit amet turpis non lacus scelerisque feugiat. Duis dictum pretium diam eget mattis. Duis suscipit sem id ipsum feugiat, ut fringilla augue cursus. Praesent sit amet dui sed est porttitor condimentum eget ut neque. Suspendisse potenti.


Donec hendrerit enim augue, bibendum porta est luctus et. Maecenas egestas justo ut velit ultricies imperdiet. Donec condimentum, nibh et molestie fringilla, urna nisi pretium urna, a rhoncus orci metus a augue. Integer in lobortis eros. Phasellus finibus viverra erat, at commodo turpis mattis vitae. Praesent blandit sem ac nulla vehicula, et finibus justo molestie. Maecenas libero purus, mattis id ante rhoncus, congue commodo nibh. Mauris eu dictum nibh. Morbi vestibulum ligula nec velit auctor, vel scelerisque neque lacinia. Maecenas suscipit consequat lacus, id condimentum libero bibendum eu.
