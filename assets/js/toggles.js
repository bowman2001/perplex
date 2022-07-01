/* let toggle = document.querySelector('.toggle');

let toggleInterface = document.querySelector('.toggle-interface');

function handleToggle(e) {
    if(e.keyCode == 32 || e.keyCode == 13){
        toggleControl.checked = !toggleControl.checked;
    }
}

toggleInterface.addEventListener('keydown', handleToggle); */

const sbBtn = document.querySelector('#tgl-sb');
const sb = document.querySelector('#l-sidebar');
const overlay = document.querySelector('#l-overlay');


const tocBtn = document.querySelector('#toggle-toc');
const toc = document.querySelector('#toc');

if( sbBtn ) {
    sbBtn.addEventListener('click', function () {
            sbHandler();
        }
    );
}

if( overlay ) {
    overlay.addEventListener('click', function () {
            sbHandler();
        }
    );
}

if ( tocBtn ) {
    tocBtn.addEventListener('click', function () {
        tocHandler();
    })
}

document.addEventListener("click", function (event) {
        if( !event.target.closest('#toggle-toc') && !toc.classList.contains('is-closed') && !event.target.closest('#toc') ) {
            tocHandler();
        }
    })

function sbHandler () {
    if ( toc && tocBtn.classList.contains( 'is-visible' ) ) {
        tocHandler( );
    }
    if ( sb ) {
        sbBtn.classList.toggle('is-visible');
        sb.classList.toggle('is-visible');
        overlay.classList.toggle('is-visible');
    }
    if ( sb.classList.contains( 'is-visible' ) ) {
        sbBtn.title = "Close the sidebar navigation.";
    } else {
        sbBtn.title = "Open the sidebar navigation.";
    }
    if( tocBtn ) {
        tocBtn.disabled = !tocBtn.disabled;
    }
}

function tocHandler () {
    tocBtn.classList.toggle( 'is-visible' );
    toc.classList.toggle('is-closed');
}
