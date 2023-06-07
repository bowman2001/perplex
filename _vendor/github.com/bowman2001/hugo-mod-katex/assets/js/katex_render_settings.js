document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        // customized options
        // • auto-render specific keys, e.g.:
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        fleqn: false,
        leqno: true,
        // • rendering keys, e.g.:
        throwOnError : false
    });
});
