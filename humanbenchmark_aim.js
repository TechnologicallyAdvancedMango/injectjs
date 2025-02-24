(function() {
    console.log('Script activated');
    var delay = prompt('Enter the delay between clicks in milliseconds:', '100');
    if (delay !== null) {
        delay = parseInt(delay, 10);
        console.log('Delay set to:', delay);

        function clickElement() {
            var element = document.querySelector('.css-z6vxiy.e6yfngs3');
            if (element) {
                console.log('Element found:', element);
                var rect = element.getBoundingClientRect();
                console.log('Element position and dimensions:', rect);
                var x = rect.left + (rect.width / 2);
                var y = rect.top + (rect.height / 2);
                console.log('Calculated click position:', {
                    x: x,
                    y: y
                });
                var targetElement = document.elementFromPoint(x, y);
                console.log('Target element at calculated position:', targetElement);
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
                console.log('Click event dispatched to target element');
                setTimeout(clickElement, delay);
            } else {
                console.log('Element not found');
                alert('Element not found');
            }
        }
        clickElement();
    } else {
        console.log('Prompt canceled');
    }
})();
