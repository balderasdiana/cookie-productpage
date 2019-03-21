$(window).on('mousemove', function(e) {
	$('#main').css({
		backgroundPosition: (10*(1-(e.clientX / $(window).width()))) + '% ' + (10*(1-(e.clientY / $(window).height()))) + '%'
	})
});

$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();

	var link = $(this).attr('href');

	$('body').animate({
		scrollTop: $(link).offset().top
	}, 500);
});

$('input, textarea:not(.input)').on('focus', function() {
	$(this).parent().addClass('focus');
});

$('input, textarea:not(.input)').on('blur', function() {
	if(!$(this).val().length) $(this).parent().removeClass('focus');
});

$('form').on('submit', function(e) {
	e.preventDefault();

	$('input, textarea').each(function() {
		$(this).val('');
	});

	$('.success-message').addClass('sent');
});

$('.pie-pick > div').on('click', function() {
	var $el = $(this);
	
	var name = $el.attr('class').split('-');
	for(var i = 0; i < name.length; i++) name[i] = name[i][0].toUpperCase() + name[i].substr(1);
	name = name.join(' ');
	
	$('textarea').focus().val('Hi! I\'d like to order 500 ' + name + 's. Please deliver them ASAP!');
	
	$('a[href="#contact"]').click();
	
	$('input[name="name"]').focus();
});