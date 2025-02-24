(function() {
    console.log('Script activated');
    var delay = 5;

    function typeLetter() {
        var lettersContainer = document.querySelector('.letters');
        if (!lettersContainer) {
            console.log('Letters container not found. Retrying...');
            setTimeout(typeLetter, delay);
            return;
        }
        var currentLetterElement = document.querySelector('.letters .incomplete.current');
        if (currentLetterElement) {
            var currentLetter = currentLetterElement.innerHTML;
            console.log('Current letter:', currentLetter);
            var wrongLetterElement = document.querySelector('.letters .wrong');
            if (wrongLetterElement) {
                console.log('Wrong letter found. Pressing backspace.');
                lettersContainer.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 'Backspace',
                    bubbles: true
                }));
                lettersContainer.dispatchEvent(new KeyboardEvent('keyup', {
                    key: 'Backspace',
                    bubbles: true
                }));
            } else {
                lettersContainer.dispatchEvent(new KeyboardEvent('keydown', {
                    key: currentLetter,
                    bubbles: true
                }));
                lettersContainer.dispatchEvent(new KeyboardEvent('keyup', {
                    key: currentLetter,
                    bubbles: true
                }));
                console.log('Typed current letter:', currentLetter);
            }
        } else {
            console.log('Current letter element not found. Retrying...');
        }
        setTimeout(typeLetter, delay);
    }
    typeLetter();
})();
