function addNewInput() {
	var $newInput = filed0.cloneNode();
	$newInput.value = '';
	$newInput.id = 'field' + $('#myform :input').length;
	$('#myform').append($newInput);
}

function generate() {
	var buff = [];
	$('.flat').html('');

	try {
		$('#myform :input').each(function () {
			if (!validNumber(parseInt($(this)[0].value))) {
				// errorFlag = true;
				// return;
				throw new Error();
			}
			buff.push(parseInt($(this)[0].value));
		});
	} catch (e) {
		alert("error");		
		return;
	}
	buff.sort(function (a, b) { return b - a; }).forEach(function (elem) {
		$('.flat').append(
			'<div class="progress-bar">' +
				'<div class="progress-track">' +
					'<div class="progress-fill">' +
						'<span>' + elem + '%</span>' +
					'</div>' +
				'</div>' +
			'</div>');
	});
	$('.vertical .progress-fill span').each(function() {
		var percent = $(this).html();
		$(this).parent().css({
			'height' : percent,
			'top' : 100 - (percent.slice(0, percent.length - 1)) + "%"
		});
	});
}

function checkNuber($input) {
	if (!validNumber(parseInt($input.value))) {
		alert("error");
	}
}

function validNumber(num) {
	return num >= 0 && num <= 100;
}