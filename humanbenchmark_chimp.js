(function() {
	var initialClass = 'css-19b5rdt';
	var changedClass = 'css-10qtjsi';

	function clickCell(number) {
		var selector = '[data-cellnumber="' + number + '"].' + initialClass + ', [data-cellnumber="' + number + '"].' + changedClass;
		var element = document.querySelector(selector);
		if (element) {
			console.log('Clicking cell:', number);
			element.click();
			setTimeout(function() {
				clickCell(number + 1);
			}, 100);
		} else {
			console.log('Element not found for cell:', number);
			clickButtonAndRestart();
		}
	}

	function clickButtonAndRestart() {
		var button = document.querySelector('.css-de05nr.e19owgy710');
		if (button) {
			console.log('Clicking button to restart');
			button.click();
			setTimeout(function() {
				clickCell(1);
			}, 100);
		} else {
			console.log('Button not found');
		}
	}
	clickCell(1);
})();
