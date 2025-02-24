(function() {
	var activeClass = 'active';
	var squareClass = 'css-lxtdud eut2yre1';
	var activeElements = new Set();
	var clickedElements = new Set();
	var roundComplete = false;

	function checkElements() {
		var elements = document.querySelectorAll('.' + squareClass.split(' ').join('.'));
		elements.forEach(function(element) {
			if (element.classList.contains(activeClass) && !clickedElements.has(element)) {
				console.log('Element became active:', element);
				activeElements.add(element);
			}
		});
		activeElements.forEach(function(element) {
			if (!element.classList.contains(activeClass) && !clickedElements.has(element)) {
				setTimeout(function() {
					if (!element.classList.contains(activeClass)) {
						console.log('Element became inactive:', element);
						simulateClick(element);
						clickedElements.add(element);
						activeElements.delete(element);
						if (activeElements.size === 0) {
							roundComplete = true;
							console.log('All elements clicked, resetting storage');
						}
					}
				}, 2000);
			}
		});
		if (roundComplete) {
			console.log('Preparing for next round');
			clickedElements.clear();
			roundComplete = false;
		}
	}

	function simulateClick(element) {
		var rect = element.getBoundingClientRect();
		var mousedownEvent = new MouseEvent('mousedown', {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: rect.left,
			clientY: rect.top
		});
		var mouseupEvent = new MouseEvent('mouseup', {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: rect.left,
			clientY: rect.top
		});
		var clickEvent = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: rect.left,
			clientY: rect.top
		});
		element.dispatchEvent(mousedownEvent);
		console.log('Mousedown event dispatched:', element);
		element.dispatchEvent(mouseupEvent);
		console.log('Mouseup event dispatched:', element);
		element.dispatchEvent(clickEvent);
		console.log('Click event dispatched:', element);
	}
	setInterval(checkElements, 500);
	console.log('Constant check initialized');
})();
