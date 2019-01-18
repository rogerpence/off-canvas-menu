const documentReady = (fn) => {
    if (document.attachEvent ? document.readyState === "complete" :
                               document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

const toggleDisplay= function() {
    document.querySelector('#site-wrapper').classList.toggle('show-nav');
};

const pageLoad = function() {
    let c1 = Array.from(document.querySelectorAll('.toggle-nav'));
    c1.forEach(element => {
        element.addEventListener('click', (e) => {
            toggleDisplay(); 
        });            
    });
}    

documentReady(pageLoad);