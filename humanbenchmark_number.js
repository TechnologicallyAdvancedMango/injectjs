(function() {
    console.log('Script activated');
    var delay = 500;

    function checkBigNumberElement() {
        var bigNumberElement = document.querySelector('.big-number');
        if (bigNumberElement) {
            console.log('Big number element found:', bigNumberElement);
            var bigNumberValue = bigNumberElement.innerText;
            console.log('Big number value:', bigNumberValue);

            function checkInputElement() {
                var inputContainer = document.querySelectorAll('.css-1qvtbrk.e19owgy78')[1];
                if (inputContainer) {
                    var inputElement = inputContainer.querySelector('input');
                    if (inputElement) {
                        inputElement.focus();
                        inputElement.value = '';
                        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
                        nativeInputValueSetter.call(inputElement, bigNumberValue);
                        var inputEvent = new Event('input', {
                            bubbles: true
                        });
                        inputElement.dispatchEvent(inputEvent);
                        console.log('Value inserted into input:', inputElement);
                        console.log('Input event dispatched');

                        function checkButtonElement() {
                            var buttonElement = document.querySelector('.css-de05nr.e19owgy710');
                            if (buttonElement && !buttonElement.disabled && buttonElement.offsetParent !== null) {
                                console.log('Button element found and visible:', buttonElement);
                                var rect = buttonElement.getBoundingClientRect();
                                var x = rect.left + (rect.width / 2);
                                var y = rect.top + (rect.height / 2);
                                console.log('Calculated click position for button:', {
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
                                buttonElement.dispatchEvent(mouseDownEvent);
                                buttonElement.dispatchEvent(mouseUpEvent);
                                buttonElement.dispatchEvent(clickEvent);
                                console.log('Full click sequence dispatched to button');

                                function checkNextButton() {
                                    var nextButton = document.querySelector('.css-de05nr.e19owgy710');
                                    if (nextButton && !nextButton.disabled && nextButton.offsetParent !== null) {
                                        console.log('Next button found and visible:', nextButton);
                                        var nextRect = nextButton.getBoundingClientRect();
                                        var nextX = nextRect.left + (nextRect.width / 2);
                                        var nextY = nextRect.top + (nextRect.height / 2);
                                        console.log('Calculated click position for next button:', {
                                            x: nextX,
                                            y: nextY
                                        });
                                        var nextMouseDownEvent = new MouseEvent('mousedown', {
                                            view: window,
                                            bubbles: true,
                                            cancelable: true,
                                            clientX: nextX,
                                            clientY: nextY
                                        });
                                        var nextMouseUpEvent = new MouseEvent('mouseup', {
                                            view: window,
                                            bubbles: true,
                                            cancelable: true,
                                            clientX: nextX,
                                            clientY: nextY
                                        });
                                        var nextClickEvent = new MouseEvent('click', {
                                            view: window,
                                            bubbles: true,
                                            cancelable: true,
                                            clientX: nextX,
                                            clientY: nextY
                                        });
                                        nextButton.dispatchEvent(nextMouseDownEvent);
                                        nextButton.dispatchEvent(nextMouseUpEvent);
                                        nextButton.dispatchEvent(nextClickEvent);
                                        console.log('Full click sequence dispatched to next button');
                                        setTimeout(checkBigNumberElement, delay);
                                    } else {
                                        console.log('Next button not found, not visible, or disabled. Retrying...');
                                        setTimeout(checkNextButton, delay);
                                    }
                                }
                                checkNextButton();
                            } else {
                                console.log('Button element not found, not visible, or disabled. Retrying...');
                                setTimeout(checkButtonElement, delay);
                            }
                        }
                        checkButtonElement();
                    } else {
                        console.log('Input element not found inside the container. Retrying...');
                        setTimeout(checkInputElement, delay);
                    }
                } else {
                    console.log('Second element with the specified class not found. Retrying...');
                    setTimeout(checkInputElement, delay);
                }
            }
            checkInputElement();
        } else {
            console.log('Big number element not found. Retrying...');
            setTimeout(checkBigNumberElement, delay);
        }
    }
    checkBigNumberElement();
})();
