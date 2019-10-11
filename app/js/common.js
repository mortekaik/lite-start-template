'use strict';

// All JS write here

$(function() {

	$('p').on('click', function () {
		$(this).css('color', 'red');
	});

	const pow = (x, y) => {
		return x ** y;
	};

	console.log(pow(2, 3));

});
