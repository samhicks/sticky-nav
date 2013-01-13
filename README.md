Sticky Nav
==========

When a user has scrolled to a given point on a page, using jQuery, stick the nav (or any other element for that matter), to the top of the browser window.

HTML
----

```html
<!-- CSS -->
<style type="text/css">
	.sticky-nav {
		position: fixed;
		top: 0;
	}
</style>

<!-- HTML -->
<div data-role="hero">
	<!-- Content here -->
</div>
<ul data-role="nav">
	<li>
		<a href="">
			I
		</a>
	</li>
	<li>
		<a href="">
			am
		</a>
	</li>
	<li>
		<a href="">
			your
		</a>
	</li>
	<li>
		<a href="">
			nav
		</a>
	</li>
</ul>

<!-- JQuery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){

		$(window).scroll(function(){
		
			var nav = $('[data-role="nav"]');
			// Find height of the hero div
			var heroHeight = $('[data-role="hero"]').innerHeight();
			
			// If the vertical position of the navigation is greater than or equal 
			// to the height of the hero div add a class of sticky-nav
			if($(this).scrollTop()>=heroHeight) {
				nav.addClass('sticky-nav');
			} else {
				nav.removeClass('sticky-nav');
			}
		});
	});
</script>
```

Clone
-----

```
$ git clone git@github.com:samhicks/sticky-nav.git
```

@copyright [Sam Hicks][samhicks] 2012

[samhicks]: https://github.com/samhicks
