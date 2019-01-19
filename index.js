const documentReady = (fn) => {
    if (document.attachEvent ? document.readyState === "complete" :
                               document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

const assignEscapeKey = function() {
    document.addEventListener('keyup', (e) => {
        if (e.keyCode == 27) {
            toggleNav();                    
        }
    });
};

const toggleNav = function() {
    const siteWrapper = document.querySelector('#site-wrapper');
    siteWrapper.classList.toggle('show-nav');
    document.querySelector('.body-toggle').classList.toggle('hide');
};

const pageLoad = function() {
    let c1 = Array.from(document.querySelectorAll('.toggle-nav'));
    c1.forEach(element => {
        element.addEventListener('click', (e) => {
            toggleNav();
        });            
    });
    assignEscapeKey();
}    

documentReady(pageLoad);
toggleNav();
