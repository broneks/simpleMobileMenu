$(document).ready(function() {
	var $navul      = $('nav ul');
	var $navtrigger = $('#mobile-nav-trigger');

	$navul.addClass('enabled');
	$navtrigger.addClass('enabled');

	$navtrigger.on('click', function() { 
		var $trigger = $(this);

		$trigger.prop('disabled', true);

		$navul.slideToggle(function() {
			var $ul = $(this); 

			$trigger.toggleClass('active').prop('disabled', false);

			$ul.css('display') === 'none' ?
			    $ul.removeClass('show').addClass('hide').removeAttr('style') :
			    $ul.removeClass('hide').addClass('show').removeAttr('style');
		});
	});
});