/* let toggle = document.querySelector('.toggle');

let toggleInterface = document.querySelector('.toggle-interface');

function handleToggle(e) {
    if(e.keyCode == 32 || e.keyCode == 13){
        toggleControl.checked = !toggleControl.checked;
    }
}

toggleInterface.addEventListener('keydown', handleToggle); */


const sbBtn1 = document.querySelector('#tgl-sb1');
const sbBtn2 = document.querySelector('#tgl-sb2');
const sb = document.querySelector('#sidebar');
const overlay = document.querySelector('#overlay');


const tocBtn = document.querySelector('#toggle-toc');
const toc = document.querySelector('#toc');

if( sbBtn1 ) {
    sbBtn1.addEventListener('click', function () {
           sbHandler();
        }
    );
}

if( sbBtn2 ) {
    sbBtn2.addEventListener('click', function () {
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
        tocBtn.classList.toggle( 'is-visible' );
        toc.classList.toggle('is-closed');
    })
}

function sbHandler () {
    if ( sb ) {
        sbBtn1.classList.toggle('is-visible');
        sbBtn2.classList.toggle('is-visible');
        sb.classList.toggle('is-visible');
        overlay.classList.toggle('is-visible');
    }
    if ( sb.classList.contains( 'is-visible' ) ) {
        sbBtn1.title = "Close the sidebar navigation.";
        sbBtn2.title = "Close the sidebar navigation.";
    } else {
        sbBtn1.title = "Open the sidebar navigation.";
        sbBtn2.title = "Open the sidebar navigation.";
    }
    if( tocBtn ) {
        tocBtn.disabled = !tocBtn.disabled;
    }
}
