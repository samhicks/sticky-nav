Sticky Nav
==========

When a user has scrolled to a given point on a page, using jQuery, stick the nav (or any other element for that matter), to the top of the browser window.

Example Usage
----

### HTML

```html
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
```

### CSS

```html
<style type="text/css">
	.sticky-nav {
		position: fixed;
		top: 0;
	}
</style>
```

### jQuery

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="js/sticky-nav.js"></script>
<script type="text/javascript">
    $('[data-role="sticky-nav"]').stickyNav();
</script>
```

Clone
-----

```
$ git clone git@github.com:samhicks/sticky-nav.git
```

@copyright [Sam Hicks][samhicks] 2012

[samhicks]: https://github.com/samhicks
