$(document).ready(function() {
	var breakpoint = 768;
	var $window = $(window);
	var $navul  = $('nav ul');
	var $navtrigger = $('#mobile-nav-trigger');

	$navtrigger.on('click', function() { 
		var $that = $(this);

		$navul.stop().slideToggle(function() {
			$that.toggleClass('active');
		});
	});

	if ($window.width() <= breakpoint) {
		$navtrigger.show();
		$navul.hide();
	}

	$window.on('resize', function() {
		if ($window.width() <= breakpoint) {
			if ($navtrigger.is(':hidden')) {
				$navtrigger.removeClass('active');
				$navtrigger.show();
				$navul.hide();
			}
		} else {
			if ($navtrigger.is(':visible')) {
				$navtrigger.hide();
				$navul.show();
			}
		}
	});
});