document.querySelectorAll('pre.chroma > code').forEach((codeBlock) => {

    // tr only may be table row in case of line numbers in table
    const tr = codeBlock.parentNode.parentNode.parentNode;

    if( tr.nodeName === 'TR' && tr.firstChild.firstChild.firstChild === codeBlock) {
        // Do nothing because this code block contains only line numbers
        return
    }
    const container = codeBlock.closest('.highlight');

    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-code');
    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.938 14.896V1.375h11.02v13.521Zm-3.73 3.729V5.188h1.98v11.458h8.958v1.979Z"/></svg>';


    function copyingDone() {
        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.917 14.917V1.438h10.979v13.479Zm1.979-1.979h7.021V3.417H7.896Zm-5.625-.605H4.25v-1.75H2.271Zm0-3H4.25v-1.75H2.271ZM8.5 18.562h1.75v-1.979H8.5Zm-6.229-3.229H4.25v-1.75H2.271Zm0 3.229H4.25v-1.979H2.271Zm3.229 0h1.75v-1.979H5.5Zm6 0h1.979v-1.979H11.5ZM2.271 6.333H4.25V4.354H2.271Z"/></svg>';
        codeBlock.classList.add('selection')
        setTimeout(() => {
            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.938 14.896V1.375h11.02v13.521Zm-3.73 3.729V5.188h1.98v11.458h8.958v1.979Z"/></svg>';
            codeBlock.classList.remove('selection');
        }, 1000);
    }

    copyButton.addEventListener('click', (cb) => {
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(codeBlock.textContent).then(r => copyingDone());
        } else {
            console.error("copy-code: No clipboard available.")
        }
    });
    container.appendChild(copyButton);
});
