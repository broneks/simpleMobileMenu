$(document).ready(function() {
	var breakpoint  = 768;
	var $window     = $(window);
	var $navul      = $('nav ul');
	var $navtrigger = $('#mobile-nav-trigger');

	$navtrigger.on('click', function() { 
		var $that = $(this);

		$that.prop('disabled', true);

		$navul.slideToggle(function() {
			$that.toggleClass('active').prop('disabled', false);
		});
	});

	if ($window.width() <= breakpoint) {
		$navtrigger.show();
		$navul.hide();
	}

	$window.on('resize', function() {
		if ($window.width() <= breakpoint) {
			if ($navtrigger.is(':hidden')) {
				$navtrigger.removeClass('active').show();
				$navul.hide();
			}
		} else {
			if ($navtrigger.is(':visible')) {
				$navtrigger.hide().removeClass('active');
				$navul.show();
			}
		}
	});
});