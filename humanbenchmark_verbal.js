(function() {
    console.log('Bookmarklet activated');
    var seenWords = new Set();
    var delay = 100;

    function checkWordElement() {
        var wordElement = document.querySelector('.word');
        if (wordElement) {
            var word = wordElement.innerText;
            console.log('Word found:', word);
            if (seenWords.has(word)) {
                console.log('Word has been seen before. Clicking SEEN button.');
                var seenButton = document.evaluate("//button[text()='SEEN']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (seenButton) {
                    seenButton.click();
                    console.log('SEEN button clicked.');
                } else {
                    console.log('SEEN button not found.');
                }
            } else {
                console.log('New word detected. Clicking NEW button.');
                seenWords.add(word);
                var newButton = document.evaluate("//button[text()='NEW']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (newButton) {
                    newButton.click();
                    console.log('NEW button clicked.');
                } else {
                    console.log('NEW button not found.');
                }
            }
        } else {
            console.log('Word element not found. Retrying...');
        }
        setTimeout(checkWordElement, delay);
    }
    checkWordElement();
})();
