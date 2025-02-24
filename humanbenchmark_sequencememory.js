(function() {
    console.log('Bookmarklet activated');
    var delay = 50;
    var initialDelay = 5000;
    var subsequentDelay = 1500;
    var activeSequence = [];
    var lastActivationTime = Date.now();
    var firstRun = true;
    var isClicking = false;
    var activatedSquares = new Set();

    function trackAndClickSquares() {
        if (isClicking) {
            return;
        }
        var squares = document.querySelectorAll('.square-row .square');
        var newActivations = false;
        squares.forEach(function(square) {
            if (square.classList.contains('active') && !activatedSquares.has(square)) {
                activeSequence.push(square);
                activatedSquares.add(square);
                console.log('Square activated');
                newActivations = true;
                lastActivationTime = Date.now();
            } else if (!square.classList.contains('active')) {
                activatedSquares.delete(square);
            }
        });
        var waitTime = firstRun ? initialDelay : subsequentDelay;
        if (!newActivations && Date.now() - lastActivationTime > waitTime) {
            if (activeSequence.length > 0) {
                console.log( % 27 No new activations.Clicking in order. % 27);
                isClicking = true;
                clickSquaresInOrder(activeSequence, function() {
                    activeSequence = [];
                    isClicking = false;
                    lastActivationTime = Date.now();
                    firstRun = false;
                    console.log( % 27 Restarting tracking. % 27);
                    setTimeout(trackAndClickSquares, delay);
                });
            } else {
                console.log( % 27 No new activations and no sequence detected.Waiting
                    for next round. % 27);
            }
        } else {
            setTimeout(trackAndClickSquares, delay);
        }
    }

    function clickSquaresInOrder(sequence, callback) {
        var clickDelay = 500;
        sequence.forEach(function(square, index) {
            setTimeout(function() {
                if (square) {
                    var rect = square.getBoundingClientRect();
                    var x = rect.left + (rect.width / 2);
                    var y = rect.top + (rect.height / 2);
                    square.focus();
                    square.click();
                    console.log( % 27 Clicked square % 27);
                    var mouseDownEvent = new MouseEvent( % 27 mousedown % 27, {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: x,
                        clientY: y
                    });
                    var mouseUpEvent = new MouseEvent( % 27 mouseup % 27, {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: x,
                        clientY: y
                    });
                    var clickEvent = new MouseEvent( % 27 click % 27, {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: x,
                        clientY: y
                    });
                    square.dispatchEvent(mouseDownEvent);
                    square.dispatchEvent(mouseUpEvent);
                    square.dispatchEvent(clickEvent);
                }
                if (index === sequence.length - 1) {
                    setTimeout(callback, clickDelay);
                }
            }, index * clickDelay);
        });
    }
    trackAndClickSquares();
})();
