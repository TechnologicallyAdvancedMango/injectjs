(function() {
	console.log('Script activated');
	var delay = 5;

	function checkElement() {
		var targetElement = document.querySelector('.view-go');
		if (targetElement) {
			console.log('Target element found:', targetElement);
			var rect = targetElement.getBoundingClientRect();
			var x = rect.left + (rect.width / 2);
			var y = rect.top + (rect.height / 2);
			console.log('Calculated click position:', {
				x: x,
				y: y
			});
			var mouseDownEvent = new MouseEvent('mousedown', {
				view: window,
				bubbles: true,
				cancelable: true,
				clientX: x,
				clientY: y
			});
			var mouseUpEvent = new MouseEvent('mouseup', {
				view: window,
				bubbles: true,
				cancelable: true,
				clientX: x,
				clientY: y
			});
			var clickEvent = new MouseEvent('click', {
				view: window,
				bubbles: true,
				cancelable: true,
				clientX: x,
				clientY: y
			});
			targetElement.dispatchEvent(mouseDownEvent);
			targetElement.dispatchEvent(mouseUpEvent);
			targetElement.dispatchEvent(clickEvent);
			console.log('Full click sequence dispatched to target element');
		} else {
			console.log('Target element not found. Retrying...');
			setTimeout(checkElement, delay);
		}
	}
	checkElement();
})();
